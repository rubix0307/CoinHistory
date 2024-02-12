# Generated by Django 5.0.1 on 2024-02-12 14:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('slug', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('symbol', models.CharField(max_length=255)),
                ('logo', models.URLField(max_length=1000)),
                ('coinmarketcap_url', models.URLField(max_length=1000)),
                ('dex_volume', models.FloatField(null=True)),
                ('circulating_supply', models.PositiveBigIntegerField(null=True)),
                ('self_reported_circulating_supply', models.FloatField(null=True)),
                ('fully_diluted_market_cap', models.FloatField(null=True)),
                ('total_supply', models.FloatField(null=True)),
                ('max_supply', models.DecimalField(decimal_places=0, max_digits=65, null=True)),
                ('is_infinite_max_supply', models.BooleanField(null=True)),
                ('is_audited', models.BooleanField(null=True)),
                ('status', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=255)),
                ('launch_price', models.FloatField(null=True)),
                ('date_launched', models.BigIntegerField(null=True)),
                ('date_updated', models.BigIntegerField(default=1707747080)),
                ('date_added', models.BigIntegerField(default=1707747080)),
            ],
            options={
                'db_table': 'currency',
            },
        ),
        migrations.CreateModel(
            name='Audit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('auditor', models.CharField(max_length=255)),
                ('audit_status', models.IntegerField()),
                ('audit_time', models.BigIntegerField()),
                ('report_url', models.URLField()),
                ('score', models.IntegerField(null=True)),
                ('currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='audit', to='currency.currency')),
            ],
        ),
        migrations.CreateModel(
            name='Pair',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('market_id', models.IntegerField()),
                ('base_currency_id', models.IntegerField()),
                ('base_symbol', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=255)),
                ('center_type', models.CharField(max_length=255)),
                ('depth_usd_negative_two', models.FloatField(null=True)),
                ('depth_usd_positive_two', models.FloatField(null=True)),
                ('effective_liquidity', models.FloatField(null=True)),
                ('exchange_id', models.IntegerField()),
                ('exchange_name', models.CharField(max_length=255)),
                ('exchange_notice', models.TextField()),
                ('exchange_slug', models.CharField(max_length=255)),
                ('fee_type', models.CharField(max_length=255)),
                ('index_price', models.IntegerField()),
                ('is_verified', models.BooleanField()),
                ('market_pair', models.CharField(max_length=255)),
                ('market_reputation', models.FloatField()),
                ('market_score', models.CharField(max_length=255)),
                ('market_url', models.CharField(max_length=255)),
                ('outlier_detected', models.IntegerField()),
                ('por_audit_status', models.IntegerField()),
                ('price', models.FloatField(null=True)),
                ('price_excluded', models.IntegerField()),
                ('quote', models.FloatField(null=True)),
                ('quote_currency_id', models.IntegerField()),
                ('quote_symbol', models.CharField(max_length=255)),
                ('rank', models.IntegerField()),
                ('reserves_available', models.IntegerField()),
                ('type', models.CharField(max_length=255)),
                ('volume_base', models.FloatField(null=True)),
                ('volume_excluded', models.IntegerField()),
                ('volume_percent', models.FloatField(null=True)),
                ('volume_quote', models.FloatField(null=True)),
                ('volume_usd', models.FloatField(null=True)),
                ('dexer_url', models.URLField(max_length=1000, null=True)),
                ('liquidity', models.FloatField(null=True)),
                ('pair_contract_address', models.CharField(max_length=255, null=True)),
                ('platform_id', models.IntegerField(null=True)),
                ('platform_name', models.CharField(max_length=255, null=True)),
                ('last_updated', models.BigIntegerField()),
                ('date_updated', models.BigIntegerField(default=1707747080)),
                ('date_added', models.BigIntegerField(default=1707747080)),
                ('currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pair', to='currency.currency')),
            ],
            options={
                'ordering': ['-volume_percent'],
            },
        ),
        migrations.CreateModel(
            name='Platform',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('platform_crypto_id', models.IntegerField()),
                ('contract_id', models.IntegerField()),
                ('contract_address', models.CharField(max_length=255)),
                ('contract_platform', models.CharField(max_length=255)),
                ('contract_platform_id', models.IntegerField()),
                ('contract_chain_id', models.IntegerField()),
                ('contract_native_currency_name', models.CharField(max_length=255)),
                ('contract_native_currency_symbol', models.CharField(max_length=255)),
                ('contract_native_currency_decimals', models.IntegerField()),
                ('contract_block_explorer_url', models.CharField(max_length=255)),
                ('contract_explorer_url', models.CharField(max_length=255)),
                ('contract_decimals', models.IntegerField(null=True)),
                ('sort', models.IntegerField()),
                ('currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='platform', to='currency.currency')),
            ],
        ),
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.BigIntegerField()),
                ('price', models.FloatField(null=True)),
                ('currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='price_record', to='currency.currency')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('href', models.CharField(max_length=255, null=True)),
                ('category', models.CharField(max_length=255, null=True)),
                ('slug', models.CharField(max_length=255, null=True)),
                ('currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tag', to='currency.currency')),
            ],
        ),
        migrations.CreateModel(
            name='URL',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField()),
                ('type', models.CharField(max_length=255)),
                ('currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='url', to='currency.currency')),
            ],
        ),
    ]
