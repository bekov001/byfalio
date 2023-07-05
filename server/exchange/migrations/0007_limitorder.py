# Generated by Django 4.2.1 on 2023-06-30 12:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('exchange', '0006_order_position_size'),
    ]

    operations = [
        migrations.CreateModel(
            name='LimitOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('ticker', models.CharField(blank=True, default='', max_length=20)),
                ('position_size', models.FloatField()),
                ('quantity_usdt', models.IntegerField()),
                ('is_active', models.BooleanField(default=True)),
                ('type_of_order', models.CharField(blank=True, max_length=50)),
                ('leverage', models.IntegerField()),
                ('price', models.FloatField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='creator', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['created'],
            },
        ),
    ]