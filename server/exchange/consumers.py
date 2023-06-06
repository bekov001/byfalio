import asyncio
import json
import threading

from asgiref.sync import async_to_sync, sync_to_async
from channels.generic.websocket import WebsocketConsumer, \
    AsyncWebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name, {"type": "chat_message", "message": message}
        )

    # Receive message from room group
    def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        self.send(text_data=json.dumps({"message": message}))


# import websockets


class PriceConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        threading.Thread(
            target=asyncio.run,
            args=(self.func(

            ),)
        ).start()

    def func(self):
        import time
        import logging
        from binance.lib.utils import config_logging
        from binance.websocket.um_futures.websocket_client import \
            UMFuturesWebsocketClient

        # config_logging(logging, logging.DEBUG)

        def message_handler(message):
            print(message)
            async_to_sync(self.send(text_data=json.dumps(message)))

        my_client = UMFuturesWebsocketClient()
        my_client.start()
        my_client.partial_book_depth(
            symbol="bnbusdt",
            speed=100,
            id=1,
            level=10,
            callback=message_handler,

        )

        time.sleep(10)

        # logging.debug("closing ws connection")
        my_client.stop()
        # async with websockets.connect(url) as worker_ws:
        #     await worker_ws.send(json.dumps(message))
        #     result = json.loads(await worker_ws.recv())
        # await self.send(text_data=json.dumps({ 'to': 'Client' })
# async def create_ws(on_create, on_message):
#     from binance.websocket.um_futures.websocket_client import \
#         UMFuturesWebsocketClient
#
#     def message_handler(message):
#          (on_message(message))
#
#     my_client = UMFuturesWebsocketClient()
#     my_client.start()
#     on_create(my_client)
#     my_client.partial_book_depth(
#         symbol="bnbusdt",
#         speed=100,
#         id=1,
#         level=10,
#         callback=message_handler,
#
#     )
#
#     # time.sleep(10)
#     # my_client.stop()
#
#     # uri = "wss://localhost:8765"
#     # async with websockets.connect(uri) as websocket:
#     #     await on_create(websocket)
#     #     while True:
#     #         message = await websocket.recv()
#     #         if message:
#     #             await on_message(message)
#
#
#
# class WebsocketClient:
#     def __init__(self, channel):
#         self.channel = channel
#         self.ws = None
#         create_ws(self.on_create, self.on_message)
#
#     async def on_create(self, ws):
#         self.ws = ws
#
#     async def on_message(self, message):
#         await self.channel.send(text_data=json.dumps(message))
#
#     # async def send(self, message):
#     #     self.ws.send(message)
#
#     # async def close(self):
#     #     self.ws.close()
#
#
# class PriceConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         self.ws_client = WebsocketClient(self)

    # async def receive(self, text_data):
    #     await self.ws_client.send(text_data)

    # async def disconnect(self, code):
    #     await self.ws_client.close()
# class PriceConsumer(WebsocketConsumer):
#     def connect(self):
#         # self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
#         # self.room_group_name = "chat_%s" % self.room_name
#         #
#         # # Join room group
#         # async_to_sync(self.channel_layer.group_add)(
#         #     self.room_group_name, self.channel_name
#         # )
#
#         self.accept()
#         asyncio.run(self.func())
#
#     async def func(self):
#         import time
#         import logging
#         from binance.lib.utils import config_logging
#         from binance.websocket.um_futures.websocket_client import \
#             UMFuturesWebsocketClient
#         # for i in range(0, 10):
#         #     self.send(text_data=str(i))
#         #
#         # config_logging(logging, logging.DEBUG)
#         #
#         async def message_handler(message):
#             await sync_to_async(print)(message)
#              # if message.get("id", 2) != 1:
#              # await self.send(message)
#             # await self.send(text_data="we32423")
#             # (self.send(text_data=message))
#              # self.send(text_data=message)
#
#         #
#         my_client = UMFuturesWebsocketClient()
#         my_client.start()
#         my_client.partial_book_depth(
#             symbol="bnbusdt",
#             speed=100,
#             id=1,
#             level=10,
#             callback=(message_handler),
#         )
#
#         # time.sleep(10)
#         #
#         # logging.debug("closing ws connection")
#         # await my_client.stop()
#         # self.send(text_data='{"leader": true}')
#     #
#     # def disconnect(self, close_code):
#     #     pass
#     #     # Leave room group
#     #     async_to_sync(self.channel_layer.group_discard)(
#     #         self.room_group_name, self.channel_name
#     #     )
#
#     # Receive message from WebSocket
#     # def receive(self, text_data):
#     #     text_data_json = json.loads(text_data)
#     #     message = text_data_json["message"]
#     #
#     #     # Send message to room group
#     #     async_to_sync(self.channel_layer.group_send)(
#     #         self.room_group_name, {"type": "chat_message", "message": message}
#     #     )
#     #
#     # # Receive message from room group
#     # def chat_message(self, event):
#     #     message = event["message"]
#     #
#     #     # Send message to WebSocket
#     #     self.send(text_data=json.dumps({"message": message}))