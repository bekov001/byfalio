from rest_framework.serializers import ModelSerializer

from .models import Position, LimitOrder, ClosingLimitOrder


class CreateLimitOrderSerializer(ModelSerializer):
    class Meta:
        model = LimitOrder
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'ticker', 'quantity_usdt', 'is_active', "price", "leverage", "type_of_pos"]


class CreateClosingLimitOrderSerializer(ModelSerializer):
    """(Mainly only LIMIT) LIMIT, STOP_LOSS, TAKE_PROFIT orders"""
    class Meta:
        model = ClosingLimitOrder
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'is_active', "position_size", "price", 'position']
        # depth = 1


class ListClosingLimitOrderSerializer(ModelSerializer):
    """LIMIT, STOP-LOSS, TAKE-PROFIT list serializer"""
    class Meta:
        model = ClosingLimitOrder
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'is_active', "position_size", "price", "type_of_order", 'position']
        depth = 1


class LimitOrderListSerializer(ModelSerializer):
    class Meta:
        model = LimitOrder
        # owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'created', 'ticker', 'quantity_usdt', 'is_active', "price", "leverage", "type_of_pos", "position_size"]


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

