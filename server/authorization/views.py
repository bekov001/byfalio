from django.contrib.auth.models import User
from django.core import serializers
from django.http import JsonResponse
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer, LoginUserSerializer
from .serializers import RegisterSerializer
from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView

from django.contrib.auth import get_user_model, authenticate

from additional.help import email_check
from django.contrib.auth import get_user_model


class RegisterView(CreateAPIView):
    User = get_user_model()
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
    #
    # def post(self, ):
    #     pass


# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer


class UserList(ListAPIView):
    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserDetail(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            user = request.user
            # print(request.user.phone_number)
            # User = get_user_model()
            # user = User.objects.get(username=username)
            # print(user)
            # refresh_token = request.data["refresh_token"]
            # token = RefreshToken(refresh_token)
            # token.blacklist()
            return Response({
                "username": user.username,
                "phone_number": user.phone_number,
                "email": user.email,
                "balance": user.balance,
                "kyc": user.kyc
            })
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class CurrentUserBalanceView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = self.request.user
        return Response({"balance": user.balance})


# class UserDetail(RetrieveAPIView):
#     from django.contrib.auth import get_user_model
#     User = get_user_model()
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


class LoginUserView(APIView):

    serializer_class = LoginUserSerializer
    permission_classes = (AllowAny, )
    def post(self, request):
        try:
            User = get_user_model()
            login = request.data["login"]
            if ("@" in login and not email_check(login)) or ("@" not in login and len(login.split("+")[-1]) != 11):
                return Response({"error": "incorrect login"})
            if "@" in request.data["login"] and User.objects.filter(email=request.data["login"]).exists():
                user = User.objects.get(email=request.data["login"])
            elif User.objects.filter(phone_number=request.data["login"]).exists():
                user = User.objects.get(phone_number=request.data["login"])
            else:
                return Response({"error": "not found user"})
            username = UserSerializer(user).data["username"]
            # data = MyTokenObtainPairSerializer(data={"username": username, "password": request.data["password"]}).data
            # print(data)
            user = authenticate(username=username, password=request.data['password'])  # check for email and password
            if not user:
                return Response({'error': 'wrong login or password'})

            # Generate Token
            refresh = RefreshToken.for_user(user)

            return Response(
                {
                    'access_token': str(refresh.access_token),
                    'refresh_token': str(refresh)
                }
                )
        except KeyError:
            return Response({"error": "missing login or password"})
#
#         if not user or user.phone_number != data['phone_number']: # check for phone
#             raise serializers.ValidationError({'detail':'Incorrect email, phone, or password'})
#
#         # Generate Token
#         refresh = RefreshToken.for_user(user)
#
#         return Response(
#             {
#                 'access': str(refresh.access_token),
#                 'refresh': str(refresh)
#             }
#             , status=status.HTTP_200_OK
#             )

# @api_view(["post"])
# def loginization(request):
#     try:
#         User = get_user_model()
#         login = request.data["login"]
#         if ("@" in login and not email_check(login)) or ("@" not in login and len(login.split("+")[-1]) != 11):
#             return Response({"error": "incorrect login"})
#         if "@" in request.data["login"] and User.objects.filter(email=request.data["login"]).exists():
#             user = User.objects.get(email=request.data["login"])
#         elif User.objects.filter(phone_number=request.data["login"]).exists():
#             user = User.objects.get(phone_number=request.data["login"])
#         else:
#             return Response({"error": "not found user"})
#         username = UserSerializer(user).data["username"]
#         data = MyTokenObtainPairSerializer(data={"username": username, "password": request.data["password"]}).data
#         print(data)
#         return Response(data)
#     except KeyError:
#         return Response({"error": "missing login or password"})


class HomeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Welcome to the JWT '
                              'Authentication page using React Js and Django!'}

        return Response(content)