import json

import websocket
import _thread
import time
import rel
#
#     config_logging(logging, logging.DEBUG)
#
#     cm_futures_client = CMFutures()
#     get_request = (cm_futures_client.index_price_klines(pair[:-1], time,
#                                                **{"limit": 999}))
from binance.um_futures import UMFutures


def on_message(ws, message):
    # print(message, type(message))
    source = (json.loads(message))["message"]
    while True:
        cm_futures_client = UMFutures()
        get_request = cm_futures_client.mark_price("BTCUSDT")
        actual_price = get_request['markPrice']
        print(actual_price)
        src = []
        for i in source:
            if i['type_of_pos'] == "LONG":
                if float(i['price']) >= float(actual_price):
                    src += [i['id']]
            elif i['type_of_pos'] == "SHORT":
                if float(i['price']) <= float(actual_price):
                    src += [i['id']]

        data = {'message': ''}
        if src:
            source = filter(lambda x: float(x['id']) not in src, source)
            # print(source, list(source))
            data = {
                "message": "open_pos",
                "data": src
            }
            msg = json.dumps(
                data
            )
            ws.send(msg)
    # print(get_request)
    # for i in data:
    #     print(i)


def on_error(ws, error):
    print(error)


def on_close(ws, close_status_code, close_msg):
    print("### closed ###")


def on_open(ws):
    print("Opened connection")


if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("ws://127.0.0.1:8000/ws/orders/",
                                on_open=on_open,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    # ws.send()

    ws.run_forever(dispatcher=rel,
                   reconnect=5)  # Set dispatcher to automatic reconnection, 5 second reconnect delay if connection closed unexpectedly
    rel.signal(2, rel.abort)  # Keyboard Interrupt
    rel.dispatch()


