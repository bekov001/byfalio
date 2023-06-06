from django.conf import settings
from django.db import models

# Create your models here.


class Order(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='old_versiob', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    ticker = models.CharField(max_length=20, blank=True, default='')
    quantity_usdt = models.IntegerField()
    is_active = models.BooleanField(default=True)
    closed = models.DateTimeField(blank=True, null=True)
    type_of_pos = models.CharField(max_length=5, blank=True)
    leverage = models.IntegerField()
    open_price = models.FloatField()

    class Meta:
        ordering = ['created']