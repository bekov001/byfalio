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

