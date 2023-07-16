from datetime import datetime as dt

from math import floor

from django.contrib.auth import get_user_model
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

from exchange.models import HistoryPnl


def email_check(email):
    try:
        validate_email( email )
        return True
    except ValidationError:
        return False


def get_pnl(position_size, open_price, current_price):
    number = float(position_size) * (float(current_price) - float(open_price))
    return number


def get_roe(position_size, open_price, current_price, quantity_usdt):
    # number = float(position_size) * (float(current_price) - float(open_price))
    return (get_pnl(position_size, open_price, current_price) / quantity_usdt) * 100


def update_balance(id, new_balance):
    """updates balance to lowest after . 3"""
    User = get_user_model()
    user_set = User.objects.filter(id=id)
    user_set.update(balance=floor(new_balance * 1000) / 1000)  # thi


def update_history_pnl(position, user, position_size, pnl):
    history_pnl = HistoryPnl.objects.filter(position=position,
                                            owner=user)
    if history_pnl:
        history_pnl.update(
            position_size=history_pnl.first().position_size + position_size,
            pnl=history_pnl.first().pnl + pnl,
            time=dt.now())
    else:
        new_pnl = HistoryPnl(
            owner=user,
            position=position,
            position_size=position_size,
            pnl=pnl,
            time=dt.now()
            # roe=get_roe(position_size, position.open_price,
            #             current_price, position.quantity_usdt)
        )
        new_pnl.save()

