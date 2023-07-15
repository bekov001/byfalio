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
    path("cancel_limit_order/", views.CancelLimitOrder.as_view()),
    path("close_limit_position/", views.CreateClosingLimitOrder.as_view()),
    path("closing_limit_orders/", views.ClosingLimitOrderList.as_view()),
    path("cancel_closing_limit_orders/", views.CancelClosingLimitOrder.as_view()),
    path("create_tp/", views.CreateTpLimitOrder.as_view()),
    path("create_sl/", views.CreateSlLimitOrder.as_view()),
    path("get_history_pnl/", views.HistoryPnlList.as_view()),
]