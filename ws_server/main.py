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
from websocket import create_connection


def colorful(data):
    new = {}
    for i in data:
        new[i['s']] = i['p']
    return new


def on_message1(api_ws, message):
    global closing_limits, opening_limits
    request = colorful((json.loads(message)))
    opened = []
    closed = []
    for i in opening_limits:
        actual_price = request[i['ticker']]
        if i['type_of_pos'] == "LONG":
            if float(i['price']) >= float(actual_price):
                opened += [i['id']]
        elif i['type_of_pos'] == "SHORT":
            if float(i['price']) <= float(actual_price):
                opened += [i['id']]

    for limit in closing_limits:
        actual_price = request[limit['position']['ticker']]
        if limit['position']['type_of_pos'] == "LONG":
            if limit['type_of_order'] in ["TAKE-PROFIT", "LIMIT"] and float(limit['price']) <= float(actual_price):
                closed += [limit['id']]
            elif limit['type_of_order'] == "STOP-LOSS" and float(limit['price']) >= float(actual_price):
                closed += [limit['id']]
        elif limit['position']['type_of_pos'] == "SHORT":
            if limit['type_of_order'] in ["TAKE-PROFIT", "LIMIT"] and float(limit['price']) >= float(actual_price):
                closed += [limit['id']]
            elif limit['type_of_order'] == "STOP-LOSS" and float(limit['price']) <= float(actual_price):
                closed += [limit['id']]

    if opened or closed:
        opening_limits = list(filter(lambda x: float(x['id']) not in opened, opening_limits))
        closing_limits = list(
            filter(lambda x: float(x['id']) not in closed, closing_limits))
        # print(source, list(source))
        data = {
            "message": {
                "open_pos": opened,
                "close_pos": closed
            }
        }
        msg = json.dumps(
            data
            )
        ws.send(msg)


def on_message(ws, message):
    global closing_limits, opening_limits
    message = (json.loads(message))['message']

    opening_limits = message['opening_limits']
    closing_limits = message['closing_limits']

    # source = message


def on_error(ws, error):
    print(error)


def on_close(ws, close_status_code, close_msg):
    print("### closed ###")


def on_open(ws):
    print("Opened connection")


if __name__ == "__main__":
    opening_limits = []
    closing_limits = []
    websocket.enableTrace(True)

    ws = websocket.WebSocketApp("ws://127.0.0.1:8000/ws/orders/",
                              on_open=on_open,
                              on_message=on_message,
                              on_error=on_error,
                              on_close=on_close)

    # ws.send()
    URL_API = ("wss://fstream.binance.com/ws/!markPrice@arr@1s")

    ws1 = websocket.WebSocketApp(URL_API,
                                on_message=on_message1,
                            )

    ws.run_forever(dispatcher=rel, reconnect=5)
    ws1.run_forever(dispatcher=rel, reconnect=5)
    # Set dispatcher to automatic reconnection, 5 second reconnect delay if connection closed unexpectedly
    rel.signal(2, rel.abort)  # Keyboard Interrupt
    rel.dispatch()

    # ws1.close()