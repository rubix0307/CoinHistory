# Generated by Django 5.0.1 on 2024-01-30 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currency', '0009_alter_value_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='value',
            name='price',
            field=models.DecimalField(decimal_places=20, max_digits=30),
        ),
    ]
