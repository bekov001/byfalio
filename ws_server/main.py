import json

import websocket
import _thread
import time
import rel


def colorful(data):
    new = {}
    for i in data:
        new[i['s']] = i['p']
    return new


def liq_price(open_price, current_price, balance, margin, position_size,
              type_of_pos):
    if type_of_pos == "LONG":
        if float(open_price) > float(current_price):
            lp = float(current_price) - (
                        float(balance) + float(margin)) / float(position_size)
        else:
            lp = float(open_price) - (float(balance) + float(margin)) / float(
                position_size)
    else:
        if float(open_price) < float(current_price):
            lp = float(current_price) + (
                        float(balance) + float(margin)) / float(
                position_size)
        else:
            lp = float(open_price) + (
                    float(balance) + float(margin)) / float(position_size)

    return lp


def on_message1(api_ws, message):
    global closing_limits, opening_limits, positions
    request = colorful((json.loads(message)))
    opened = []
    closed = []
    liquidated = []
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
            if limit['type_of_order'] in ["TAKE-PROFIT", "LIMIT"] and float(
                    limit['price']) <= float(actual_price):
                closed += [limit['id']]
            elif limit['type_of_order'] == "STOP-LOSS" and float(
                    limit['price']) >= float(actual_price):
                closed += [limit['id']]
        elif limit['position']['type_of_pos'] == "SHORT":
            if limit['type_of_order'] in ["TAKE-PROFIT", "LIMIT"] and float(
                    limit['price']) >= float(actual_price):
                closed += [limit['id']]
            elif limit['type_of_order'] == "STOP-LOSS" and float(
                    limit['price']) <= float(actual_price):
                closed += [limit['id']]

    for position in positions:
        current_price = float(request[position['ticker']])
        liquid = liq_price(position['open_price'],
                           current_price,
                           position['owner']['balance'],
                           position['quantity_usdt'],
                           position['position_size'],
                           position['type_of_pos'])
        if position['type_of_pos'] == "LONG" and liquid < current_price:
            liquidated += [(position['id'], liquid)]
        elif position['type_of_pos'] == "SHORT" and liquid < current_price:
            liquidated += [(position['id'], liquid)]

    if opened or closed:
        opening_limits = list(
            filter(lambda x: float(x['id']) not in opened, opening_limits))
        closing_limits = list(
            filter(lambda x: float(x['id']) not in closed, closing_limits))
        positions = list(
            filter(lambda x: float(x['id']) not in liquidated, positions))
        # print(source, list(source))
        data = {
            "message": {
                "open_pos": opened,
                "close_pos": closed,
                "liquid_pos": liquidated
            }
        }
        msg = json.dumps(
            data
        )
        ws.send(msg)


def on_message(ws, message):
    global closing_limits, opening_limits, positions
    message = (json.loads(message))['message']
    opening_limits = message['opening_limits']
    closing_limits = message['closing_limits']
    positions = message['positions']

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
    positions = []
    websocket.enableTrace(True)
    # url = "byfalio.herokuapp.com"
    url = "localhost:8000"
    ws = websocket.WebSocketApp(f"ws://{url}/ws/orders/",
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
