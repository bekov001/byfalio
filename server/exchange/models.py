import datetime

from django.conf import settings
from django.db import models

# Create your models here.


class Position(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='old_versiob', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    ticker = models.CharField(max_length=20, blank=True, default='')
    position_size = models.FloatField()
    quantity_usdt = models.FloatField()
    is_active = models.BooleanField(default=True)
    closed = models.DateTimeField(blank=True, null=True)
    type_of_pos = models.CharField(max_length=5, blank=True)
    leverage = models.IntegerField()
    open_price = models.FloatField()

    class Meta:
        ordering = ['created']


class LimitOrder(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='creator', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    ticker = models.CharField(max_length=20, blank=True, default='')
    position_size = models.FloatField()
    quantity_usdt = models.FloatField()
    is_active = models.BooleanField(default=True)
    type_of_pos = models.CharField(max_length=5, blank=True)
    leverage = models.IntegerField()
    price = models.FloatField()

    class Meta:
        ordering = ['created']


class ClosingLimitOrder(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='author',
                              on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    position_size = models.FloatField()
    is_active = models.BooleanField(default=True)
    price = models.FloatField()
    position = models.ForeignKey(Position, related_name='position',
                             on_delete=models.CASCADE)
    type_of_order = models.CharField(max_length=50, blank=True)

    class Meta:
        ordering = ['created']


class HistoryPnl(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='owner',
                              on_delete=models.CASCADE)
    position = models.ForeignKey(Position, related_name='pos',
                                 on_delete=models.CASCADE)
    time = models.DateTimeField(blank=True, null=True)
    pnl = models.FloatField()
    roe = models.FloatField(null=True)
    position_size = models.FloatField()

    class Meta:
        ordering = ['time']