from datetime import datetime as dt


from binance.um_futures import UMFutures
from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
# from django.shortcuts import render
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.views import APIView

from .models import Position, LimitOrder
from .serializers import PositionListSerializer, CreatePositionSerializer, \
    CreateLimitOrderSerializer, LimitOrderListSerializer


from binance.cm_futures import CMFutures

from additional.help import get_pnl


def index(request):
    return render(request, "exchange/index.html")


def room(request, room_name):
    return render(request, "exchange/room.html", {"room_name": room_name})


def price(request):
    return render(request, "exchange/dubai.html")


@api_view(('GET',))
@permission_classes((AllowAny,))
def history(request, pair, time):
    from binance.client import Client
    from binance.enums import HistoricalKlinesType

    client = Client()

    get_request = client.get_historical_klines("BTCUSDT",
                                          Client.KLINE_INTERVAL_1HOUR,
                                          "1 Jan, 2023", klines_type=HistoricalKlinesType.FUTURES)
  
    # get_request = (cm_futures_client.index_price_klines(pair[:-1], time,
    #                                            **{"limit": 999}))
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
    # return render(request, "exchange/dubai.html")


class CreateMarketPosition(CreateAPIView):
    queryset = Position.objects.all()
    serializer_class = CreatePositionSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        futures_client = UMFutures()
        get_request = (futures_client.mark_price(symbol=self.request.data["ticker"]))
        current_price = float(get_request['markPrice'])
        if float(self.request.data['quantity_usdt']) < 1:
            raise serializers.ValidationError({"error": "less than 5"})
        if self.request.user.balance - float(self.request.data['quantity_usdt']) < 0:
            raise serializers.ValidationError({"error": "not enough balance"})
        else:
            User = get_user_model()
            user_set = User.objects.filter(id=self.request.user.id)
            print(self.request.user.balance,  float(self.request.data['quantity_usdt']))
            # self.request.user.balance -= float(self.request.data['quantity_usdt'])
            user_set.update(balance=self.request.user.balance - float(self.request.data['quantity_usdt']))  # this will update only

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
        serializer.save(owner=self.request.user,
                        position_size=self.request.data['leverage']
                                      * float(self.request.data['quantity_usdt'])
                                      / float(self.request.data['price']))


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


class CloseMarketPosition(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = (request.data)
        futures_client = UMFutures()
        get_request = (
            futures_client.mark_price(symbol=request.data["ticker"]))
        current_price = float(get_request['markPrice'])
        position = Position.objects.get(id=data['id'], owner=request.user, is_active=True)
        if position:
            position_size = min(position.position_size, float(data['position_size']))
            pnl = (-1 if position.type_of_pos == "SHORT" else 1 ) * get_pnl(position_size, position.open_price, current_price)
            request.user.balance += pnl + (position_size * position.open_price/ position.leverage)
            request.user.save()
            position.position_size -= position_size
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


@api_view(["post"])
@permission_classes((IsAuthenticated,))
def close_order(request, id):
    try:
        order = Position.objects.get(id=id, owner=request.user.id)
        if order:
            order.is_active = False
            order.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({'error': "not found"})
    except Exception as e:
        return Response({"error": str(e)})


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