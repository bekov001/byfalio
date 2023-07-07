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
    User = get_user_model()
    user_set = User.objects.filter(id=id)
    # print(self.request.user.balance, float(self.request.data['quantity_usdt']))
    # self.request.user.balance -= float(self.request.data['quantity_usdt'])
    user_set.update(balance=new_balance)  # thi

