# Generated by Django 5.0.1 on 2024-01-24 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currency', '0002_pair_currency_pairs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pair',
            name='effective_liquidity',
            field=models.DecimalField(decimal_places=15, max_digits=25, null=True),
        ),
    ]