# Generated by Django 4.2.1 on 2023-06-06 09:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exchange', '0004_order_open_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='type_of_pos',
            field=models.CharField(blank=True, max_length=5),
        ),
    ]
