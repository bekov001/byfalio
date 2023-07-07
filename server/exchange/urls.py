from django.urls import path

from . import views

urlpatterns = [
    # path("", views.index, name="index"),
    # path("<str:room_name>/", views.room, name="room"),
    path("price/", views.price, name="room"),
    path("history/<str:pair>/<str:time>/", views.history, name="room"),
    path("open_order/", views.CreateMarketPosition.as_view(), name="order"),
    path("orders/", views.OrderList.as_view(), name="order"),
    # path("order/<int:id>", views.close_order, name="order"),
    path("open_limit_order/", views.LimitOrderCreate.as_view()),
    path("limit_orders/", views.LimitOrderList.as_view()),
    path("close_market_position/", views.CloseMarketPosition.as_view()),
    path("cancel_limit_order/", views.CancelLimitOrder.as_view())
]