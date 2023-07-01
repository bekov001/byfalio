from rest_framework.serializers import ModelSerializer

from .models import Position, LimitOrder


class CreateLimitOrderSerializer(ModelSerializer):
    class Meta:
        model = LimitOrder
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'ticker', 'quantity_usdt', 'is_active', "price", "leverage", "type_of_order", "type_of_pos"]


class LimitOrderListSerializer(ModelSerializer):
    class Meta:
        model = LimitOrder
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'ticker', 'quantity_usdt', 'is_active', "price", "leverage", "type_of_order"]


class CreatePositionSerializer(ModelSerializer):
    class Meta:
        model = Position
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'ticker', 'quantity_usdt', 'is_active', 'closed', "leverage", "type_of_pos"]


class PositionListSerializer(ModelSerializer):
    class Meta:
        model = Position
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'ticker', 'quantity_usdt',
                  'is_active', 'closed', "open_price", "leverage",
                  "type_of_pos", "position_size"]

