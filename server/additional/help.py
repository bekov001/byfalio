from math import floor

from django.contrib.auth import get_user_model
from django.core.validators import validate_email
from django.core.exceptions import ValidationError


def email_check(email):
    try:
        validate_email( email )
        return True
    except ValidationError:
        return False


def get_pnl(position_size, open_price, current_price):
    number = float(position_size) * (float(current_price) - float(open_price))
    return number


def update_balance(id, new_balance):
    """updates balance to lowest after . 3"""
    User = get_user_model()
    user_set = User.objects.filter(id=id)
    user_set.update(balance=floor(new_balance * 1000) / 1000)  # thi

