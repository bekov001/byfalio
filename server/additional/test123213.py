import time
import logging
from binance.lib.utils import config_logging
from binance.websocket.um_futures.websocket_client import UMFuturesWebsocketClient

config_logging(logging, logging.DEBUG)


def message_handler(message):
    print(message)


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

logging.debug("closing ws connection")
my_client.stop()