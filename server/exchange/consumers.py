import asyncio
import json
import threading

from asgiref.sync import async_to_sync, sync_to_async
from channels.generic.websocket import WebsocketConsumer, \
    AsyncWebsocketConsumer
from djangochannelsrestframework.permissions import IsAuthenticated

from additional.help import update_balance, get_pnl
from .models import Position, LimitOrder, ClosingLimitOrder
from .serializers import PositionListSerializer, LimitOrderListSerializer, \
    CreatePositionSerializer, ListClosingLimitOrderSerializer
from channels.layers import get_channel_layer
from datetime import datetime as dt


class ChatConsumer(WebsocketConsumer):
    pass
    # def connect(self):
    #     self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
    #     self.room_group_name = "chat_%s" % self.room_name
    #
    #     # Join room group
    #     async_to_sync(self.channel_layer.group_add)(
    #         self.room_group_name, self.channel_name
    #     )
    #
    #     self.accept()
    #
    # def disconnect(self, close_code):
    #     # Leave room group
    #     async_to_sync(self.channel_layer.group_discard)(
    #         self.room_group_name, self.channel_name
    #     )
    #
    # # Receive message from WebSocket
    # def receive(self, text_data):
    #     text_data_json = json.loads(text_data)
    #     message = text_data_json["message"]
    #
    #     # Send message to room group
    #     async_to_sync(self.channel_layer.group_send)(
    #         self.room_group_name, {"type": "chat_message", "message": message}
    #     )
    #
    # # Receive message from room group
    # def chat_message(self, event):
    #     message = event["message"]
    #
    #     # Send message to WebSocket
    #     self.send(text_data=json.dumps({"message": message}))


# import websockets


class PriceConsumer(AsyncWebsocketConsumer):
    pass
    # async def connect(self):
    #     await self.accept()
    #     threading.Thread(
    #         target=asyncio.run,
    #         args=(self.func(
    #
    #         ),)
    #     ).start()
    #
    # def func(self):
    #     import time
    #     import logging
    #     from binance.lib.utils import config_logging
    #     from binance.websocket.um_futures.websocket_client import \
    #         UMFuturesWebsocketClient
    #
    #     # config_logging(logging, logging.DEBUG)
    #
    #     def message_handler(message):
    #         print(message)
    #         async_to_sync(self.send(text_data=json.dumps(message)))
    #
    #     my_client = UMFuturesWebsocketClient()
    #     my_client.start()
    #     my_client.partial_book_depth(
    #         symbol="bnbusdt",
    #         speed=100,
    #         id=1,
    #         level=10,
    #         callback=message_handler,
    #
    #     )
    #
    #     time.sleep(10)
    #
    #     # logging.debug("closing ws connection")
    #     my_client.stop()
    #     # async with websockets.connect(url) as worker_ws:
    #     #     await worker_ws.send(json.dumps(message))
    #     #     result = json.loads(await worker_ws.recv())
    #     # await self.send(text_data=json.dumps({ 'to': 'Client' })


def open_pos(data):
    channel_layer = get_channel_layer()
    for el in LimitOrder.objects.filter(id__in=data, is_active=True):
        # ['ticker', 'quantity_usdt', 'is_active', 'closed', "leverage", "type_of_pos"]
        pos = Position(
            owner=el.owner,
            ticker=el.ticker,
            quantity_usdt=el.quantity_usdt,
            leverage=el.leverage,
            type_of_pos=el.type_of_pos,
            open_price=el.price,
            position_size=el.position_size
        )
        pos.save()
        print("success")
        el.delete()

        async_to_sync(channel_layer.group_send)(str(el.owner_id),
                                            {"type": "chat.message", "text": el.owner_id})


def close_pos(data):
    channel_layer = get_channel_layer()
    for el in ClosingLimitOrder.objects.filter(id__in=data, is_active=True):
        position = Position.objects.get(id=el.position.id, is_active=True)
        position_size = min(position.position_size,
                            float(el.position_size))
        pnl = (-1 if position.type_of_pos == "SHORT" else 1) * get_pnl(
            position_size, position.open_price, el.price)
        print(pnl)
        update_balance(position.owner.id, position.owner.balance + pnl + (
                    position_size * position.open_price / position.leverage))
        position.position_size -= position_size
        if position.position_size == 0:
            elems = ClosingLimitOrder.objects.filter(position=position.id)
            position.is_active = False
            position.closed = dt.now()
            elems.delete()
        position.save()

        async_to_sync(channel_layer.group_send)(str(el.owner_id),
                                            {"type": "chat.message", "text": el.owner_id})
        # el.delete()


class OrderConsumer(WebsocketConsumer):
    """private class for ROBOTO"""
    def get_chart(self):
        # serializer = OrderListSerializer()
        queryset = LimitOrder.objects.filter(is_active=True)
        data = LimitOrderListSerializer(queryset, many=True).data
        return data

    def get_closing_limits(self):
        # serializer = OrderListSerializer()
        queryset = ClosingLimitOrder.objects.filter(is_active=True)
        data = ListClosingLimitOrderSerializer(queryset, many=True).data
        return data

    def connect(self):
        async_to_sync(self.channel_layer.group_add)("roboto",
                                                    self.channel_name)
        data = self.get_chart()
        self.accept()
        async_to_sync(self.channel_layer.group_send)(
            'roboto',
            {
                "type": "send.data",
                "text": data,
            },
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        # print(text_data_json)
        message = text_data_json["message"]
        opened = message['open_pos']
        closed = message['close_pos']
        if opened:
            open_pos(opened)
        if closed:
            close_pos(closed)
        # data = self.get_chart()
        # async_to_sync(self.channel_layer.group_send)(
        #     'roboto',
        #     {
        #         "type": "send.data",
        #         "text": data,
        #     },
        # )

    def send_data(self, event):
        self.send(text_data=json.dumps({
            "message": {
                'opening_limits': self.get_chart(),
                'closing_limits': self.get_closing_limits()
            }
        }))
        #
        # # Send message to room group
        # async_to_sync(self.channel_layer.group_send)(
        #     self.room_group_name, {"type": "chat_message", "message": message}


class GayConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        # self.send(text_data=json.dumps({"message": data}))

    def get_data(self, user_id):
        # serializer = OrderListSerializer()
        queryset = LimitOrder.objects.filter(is_active=True, owner_id=int(user_id))
        data = LimitOrderListSerializer(queryset, many=True).data
        data = json.dumps({"data": data})
        return data

    def receive(self, text_data):
        async_to_sync(self.channel_layer.group_add)(text_data,
                                                    self.channel_name)
        async_to_sync(self.channel_layer.group_send)(
            text_data,
            {
                "type": "chat.message",
                "text": text_data,
            },
        )

    def chat_message(self, event):
        id = event['text']
        self.send(text_data=self.get_data(user_id=id))
