from datetime import datetime as dt
from datetime import date
from datetime import timedelta


from asgiref.sync import async_to_sync
from binance.um_futures import UMFutures
from channels.layers import get_channel_layer
from django.contrib.auth import get_user_model
from django.shortcuts import render
from binance.client import Client
from binance.enums import HistoricalKlinesType
# Create your views here.
# from django.shortcuts import render
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.views import APIView

from .models import Position, LimitOrder, ClosingLimitOrder, HistoryPnl
from .serializers import PositionListSerializer, CreatePositionSerializer, \
    CreateLimitOrderSerializer, LimitOrderListSerializer, \
    ListClosingLimitOrderSerializer, \
    CreateClosingLimitOrderSerializer, HistoryPnlSerializer

from binance.cm_futures import CMFutures

from additional.help import get_pnl, update_balance, get_roe, \
    update_history_pnl

QUANTITY_LEVEL = 3




def index(request):
    return render(request, "exchange/index.html")


def room(request, room_name):
    return render(request, "exchange/room.html", {"room_name": room_name})


def price(request):
    return render(request, "exchange/dubai.html")


@api_view(('GET',))
@permission_classes((AllowAny,))
def history(request, pair, time):
    try:
        client = Client()
        today = date.today()
        formatting = lambda x: x.strftime("%d %m, %Y")

        data = {
            "1m": [Client.KLINE_INTERVAL_1MINUTE, "2 day ago UTC"],
            "30m": [Client.KLINE_INTERVAL_30MINUTE,  formatting(today - timedelta(days=120))],
            "1h":  [Client.KLINE_INTERVAL_1HOUR, formatting(today - timedelta(days=200))],
            "4h": [Client.KLINE_INTERVAL_4HOUR, "1 Jan, 2021"],
            "1d": [Client.KLINE_INTERVAL_1DAY, "1 Jan, 2020"]
                }

        get_request = client.get_historical_klines(pair,
                                                   data[time][0],
                                                   start_str=data[time][1],
                                                   klines_type=HistoricalKlinesType.FUTURES)
        src = []
        for data in get_request:
            src.append(
                {
                    "time": data[0] / 1000,
                    "open": data[1],
                    "high": data[2],
                    "low": data[3],
                    "close": data[4]
                }
            )
        # print(src)
        return Response({'data': src})
    except KeyError:
        return Response({'error': "wrong time"})


class CreateMarketPosition(CreateAPIView):
    queryset = Position.objects.all()
    serializer_class = CreatePositionSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        futures_client = UMFutures()
        get_request = (futures_client.mark_price(symbol=self.request.data["ticker"]))
        current_price = float(get_request['markPrice'])
        print(self.request.user.balance, float(
            self.request.data['quantity_usdt']))
        if float(self.request.data['quantity_usdt']) < QUANTITY_LEVEL:
            raise serializers.ValidationError({"error": f"less than {QUANTITY_LEVEL}"})
        if self.request.user.balance - float(self.request.data['quantity_usdt']) < 0:
            raise serializers.ValidationError({"error": "not enough balance"})
        else:
            update_balance(self.request.user.id, self.request.user.balance - float(self.request.data['quantity_usdt']))  # this will update only
            serializer.save(owner=self.request.user,
                            open_price=current_price,
                            position_size=self.request.data['leverage']
                                          * float(self.request.data['quantity_usdt'])
                                          / current_price)


class LimitOrderCreate(CreateAPIView):
    queryset = LimitOrder.objects.all()
    serializer_class = CreateLimitOrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # t = TemperatureData.objects.get(id=1)
        # print(self.request.user)
        futures_client = UMFutures()
        get_request = (
            futures_client.mark_price(symbol=self.request.data["ticker"]))
        current_price = float(get_request['markPrice'])
        print(self.request.user.balance, float(
                self.request.data['quantity_usdt']))
        if float(self.request.data['quantity_usdt']) < QUANTITY_LEVEL:
            raise serializers.ValidationError(
                {"error": f"less than {QUANTITY_LEVEL}"})
        elif self.request.user.balance - float(
                self.request.data['quantity_usdt']) < 0:
            raise serializers.ValidationError({"error": "not enough balance"})
        elif (float(self.request.data['price']) <= current_price and
            self.request.data['type_of_pos'] == "SHORT") \
                or \
                (float(self.request.data['price']) >= current_price and
                 self.request.data['type_of_pos'] == "LONG"):
            update_balance(self.request.user.id,
                           self.request.user.balance - float(
                               self.request.data['quantity_usdt']))
            pos = Position(
                owner=self.request.user,
                ticker=self.request.data['ticker'],
                quantity_usdt=self.request.data['quantity_usdt'],
                leverage=self.request.data['leverage'],
                type_of_pos=self.request.data['type_of_pos'],
                open_price=current_price,
                position_size=self.request.data['leverage']
                              * float(self.request.data['quantity_usdt'])
                              / float(self.request.data['price'])
            )
            pos.save()
        else:
            update_balance(self.request.user.id,
                           self.request.user.balance - float(
                               self.request.data['quantity_usdt']))
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                'roboto',
                {
                    "type": "send.data",
                    "text": 'data',
                },
            )
            serializer.save(owner=self.request.user,
                            position_size=self.request.data['leverage']
                                      * float(self.request.data['quantity_usdt'])
                                      / float(self.request.data['price']))


class CreateClosingLimitOrder(CreateAPIView):
    queryset = ClosingLimitOrder.objects.all()
    serializer_class = CreateClosingLimitOrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # t = TemperatureData.objects.get(id=1)
        # print(self.request.data)
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'roboto',
            {
                "type": "send.data",
                "text": 'data',
            },
        )

        serializer.save(owner=self.request.user, type_of_order="LIMIT")


class CreateTpLimitOrder(CreateAPIView):
    queryset = ClosingLimitOrder.objects.all()
    serializer_class = CreateClosingLimitOrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # t = TemperatureData.objects.get(id=1)
        # if self.request.data['type_of_']
        previous = ClosingLimitOrder.objects.filter(owner=self.request.user, position=self.request.data['position'], type_of_order="TAKE-PROFIT")
        previous.delete()
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'roboto',
            {
                "type": "send.data",
                "text": 'data',
            },
        )
        #
        serializer.save(owner=self.request.user, type_of_order="TAKE-PROFIT")


class CreateSlLimitOrder(CreateAPIView):
    queryset = ClosingLimitOrder.objects.all()
    serializer_class = CreateClosingLimitOrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # t = TemperatureData.objects.get(id=1)
        # if self.request.data['type_of_']
        previous = ClosingLimitOrder.objects.filter(owner=self.request.user,
                                                    position=self.request.data[
                                                        'position'],
                                                    type_of_order="STOP-LOSS")
        print(self.request.data, previous)
        previous.delete()
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'roboto',
            {
                "type": "send.data",
                "text": 'data',
            },
        )
        #
        serializer.save(owner=self.request.user, type_of_order="STOP-LOSS")


class CancelLimitOrder(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = (request.data)
        order = LimitOrder.objects.filter(id=data['id'], owner=request.user, is_active=True).first()
        if order:
            # position_size = min(position.position_size, float(data['position_size']))
            # pnl = (-1 if position.type_of_pos == "SHORT" else 1 ) * get_pnl(position_size, position.open_price, current_price)
            update_balance(request.user.id, request.user.balance + order.quantity_usdt)
            order.delete()
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                'roboto',
                {
                    "type": "send.data",
                    "text": 'data',
                },
            )
            return Response({"success": "bro"})
        return Response({'error': "not found"})


class CancelClosingLimitOrder(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = (request.data)
        print(data)
        order = ClosingLimitOrder.objects.filter(id=data['id'], owner=request.user, is_active=True).first()
        if order:
            order.delete()
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                'roboto',
                {
                    "type": "send.data",
                    "text": 'data',
                },
            )
            return Response({"success": "bro"})
        return Response({'error': "not found"})


class LimitOrderList(ListAPIView):
    # from django.contrib.auth import get_user_model
    # User = get_user_model()
    # queryset = Order.objects.all(request.user)
    serializer_class = LimitOrderListSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user

        return LimitOrder.objects.filter(owner=user.id)


class ClosingLimitOrderList(ListAPIView):
    # from django.contrib.auth import get_user_model
    # User = get_user_model()
    # queryset = Order.objects.all(request.user)
    serializer_class = ListClosingLimitOrderSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user

        return ClosingLimitOrder.objects.filter(owner=user.id)


class CloseMarketPosition(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = (request.data)
        futures_client = UMFutures()
        get_request = (
            futures_client.mark_price(symbol=request.data["ticker"]))
        current_price = float(get_request['markPrice'])
        position = Position.objects.filter(id=data['id'], owner=request.user, is_active=True).first()
        if position:
            orders = ClosingLimitOrder.objects.filter(position=position.id,
                                                     owner=request.user)
            orders.delete()

            position_size = min(position.position_size, float(data['position_size']))
            pnl = (-1 if position.type_of_pos == "SHORT" else 1 ) * get_pnl(position_size, position.open_price, current_price)
            update_balance(request.user.id, request.user.balance + pnl + (position_size * position.open_price/ position.leverage))
            position.position_size -= position_size
            update_history_pnl(position, request.user, position_size, pnl)
            if position.position_size == 0:

                position.is_active = False
                position.closed = dt.now()

            position.save()
        else:
            return Response({'error': "not found"})
        print(request.data)
        test = {
            "id": '',
            "ticker": '',
            'position_size': ''
        }

        return Response({"nothing": "bro"})


class OrderList(ListAPIView):
    # from django.contrib.auth import get_user_model
    # User = get_user_model()
    # queryset = Order.objects.all(request.user)
    serializer_class = PositionListSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Position.objects.filter(owner=user.id)


class HistoryPnlList(ListAPIView):
    # from django.contrib.auth import get_user_model
    # User = get_user_model()
    # queryset = Order.objects.all(request.user)
    serializer_class = HistoryPnlSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return HistoryPnl.objects.filter(owner=user.id)