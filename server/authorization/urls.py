from django.urls import path
# from . import views


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import RegisterView, UserList, LoginUserView, HomeView, LogoutView, \
    UserDetail, CurrentUserBalanceView

# from .views import MyTokenObtainPairView

urlpatterns = [
    # path('', getRoutes),
    # path('loginization/', MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path("users/", UserList.as_view()),
    path("login/", LoginUserView.as_view()),
    path("home/", HomeView.as_view()),
    path('logout/', LogoutView.as_view(), name ='logout'),
    path('detail/', UserDetail.as_view(), name ='logout'),
    path('balance/', CurrentUserBalanceView.as_view()),


]


