# Generated by Django 4.2.1 on 2023-06-30 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exchange', '0008_rename_order_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='limitorder',
            name='type_of_pos',
            field=models.CharField(blank=True, max_length=5),
        ),
    ]
