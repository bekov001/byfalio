from Demos.FileSecurityTest import permissions
from django.shortcuts import render

# Create your views here.
# from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import CreateAPIView, ListAPIView

from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'ticker', 'quantity_usdt', 'is_active', 'closed', "open_price", "leverage", "type_of_pos"]


def index(request):
    return render(request, "exchange/index.html")


def room(request, room_name):
    return render(request, "exchange/room.html", {"room_name": room_name})


def price(request):
    return render(request, "exchange/dubai.html")




@api_view(('GET',))
@permission_classes((AllowAny,))
def history(request, pair, time):
    import logging
    from binance.cm_futures import CMFutures
    from binance.lib.utils import config_logging

    config_logging(logging, logging.DEBUG)

    cm_futures_client = CMFutures()
    get_request = (cm_futures_client.klines(pair[:-1] + "_PERP", time,
                                               **{"limit": 999}))
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
    return Response({'data': src})
    # return render(request, "exchange/dubai.html")


class OrderCreate(CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class OrderList(ListAPIView):
    # from django.contrib.auth import get_user_model
    # User = get_user_model()
    # queryset = Order.objects.all(request.user)
    serializer_class = OrderSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Order.objects.filter(owner=user)