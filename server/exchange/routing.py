from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r"ws/chat/(?P<room_name>\w+)/$", consumers.ChatConsumer.as_asgi()),
    re_path(r"ws/price/$", consumers.PriceConsumer.as_asgi()),
    re_path(r"ws/orders/$", consumers.OrderConsumer.as_asgi()),
    re_path(r"ws/gays/$", consumers.GayConsumer.as_asgi()),
]