from rest_framework import serializers
# from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# from mysite4.authentication.models import Profile
from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    # snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'phone_number', 'email', 'balance', 'kyc']


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     # username_field = User.EMAIL_FIELD
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#
#         # Add custom claims
#         token['username'] = user.username
#         # ...
#
#         return token
#
#     # def get_fields(self):
#     #     pass


# class LoginUserSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     phone_number = serializers.CharField()
#     password = serializers.CharField(write_only=True)


class LoginUserSerializer(serializers.Serializer):
    login = serializers.CharField()
    password = serializers.CharField(write_only=True)


class RegisterSerializer(serializers.ModelSerializer):

    # username = serializers.CharField(required=True, max_length=22,
    #                                  validators=[UniqueValidator(queryset=User.objects.all())])
    phone_number = serializers.CharField(required=False, max_length=12)
    email = serializers.EmailField(
        required=False,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        # fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        fields = ('phone_number', 'email', 'password', 'password2')
        # extra_kwargs = {
        #     'first_name': {'required': True},
        #     'last_name': {'required': True}
        # }

    def validate(self, attrs):
        # print(attrs['phone_number'])
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"error": "Password fields didn't match."})
        if not attrs.get('email', None) and not attrs.get('phone_number', None):
            raise serializers.ValidationError({"error": "empty login"})
        if User.objects.filter(email=attrs.get('email', False)).exists() or User.objects.filter(phone_number=attrs.get('phone_number', False)).exists():
            raise serializers.ValidationError({"error": "not unique"})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=f"user{hash(validated_data.get('email', validated_data.get('phone_number')))}",
            email=validated_data.get('email', None),
            phone_number=validated_data.get('phone_number', None)
            # first_name=validated_data['first_name'],
            # last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        # user.profile.number = validated_data[""]
        return user
