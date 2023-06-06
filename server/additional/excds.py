import logging
from binance.cm_futures import CMFutures
from binance.lib.utils import config_logging

config_logging(logging, logging.DEBUG)

cm_futures_client = CMFutures()

print(cm_futures_client.index_price_klines("BTCUSD", "1h", **{"limit": 1000}))