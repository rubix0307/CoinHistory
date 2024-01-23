from django.db import models
from django.utils import timezone

class Pair(models.Model):
    market_id = models.IntegerField(primary_key=True)
    market_pair = models.CharField(max_length=255)
    market_reputation = models.IntegerField()
    market_score = models.CharField(max_length=255)
    market_url = models.CharField(max_length=255)
    base_currency_id = models.IntegerField()
    base_symbol = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    center_type = models.CharField(max_length=255)
    depth_usd_negative_two = models.DecimalField(max_digits=25, decimal_places=15)
    depth_usd_positive_two = models.DecimalField(max_digits=25, decimal_places=15)
    effective_liquidity = models.DecimalField(max_digits=25, decimal_places=15)
    exchange_id = models.IntegerField()
    exchange_name = models.CharField(max_length=255)
    exchange_notice = models.CharField(max_length=255)
    exchange_slug = models.CharField(max_length=255)
    fee_type = models.CharField(max_length=255)
    index_price = models.IntegerField()
    is_verified = models.BooleanField()
    last_updated = models.DateTimeField()
    outlier_detected = models.IntegerField()
    por_audit_status = models.IntegerField()
    price = models.DecimalField(max_digits=25, decimal_places=15)
    price_excluded = models.IntegerField()
    quote = models.DecimalField(max_digits=25, decimal_places=15)
    quote_currency_id = models.IntegerField()
    quote_symbol = models.CharField(max_length=255)
    rank = models.IntegerField()
    reserves_available = models.IntegerField()
    type = models.CharField(max_length=255)
    volume_base = models.DecimalField(max_digits=25, decimal_places=15)
    volume_excluded = models.IntegerField()
    volume_percent = models.DecimalField(max_digits=25, decimal_places=15)
    volume_quote = models.DecimalField(max_digits=25, decimal_places=15)
    volume_usd = models.DecimalField(max_digits=25, decimal_places=15)

    platform_id = models.IntegerField(null=True)
    platform_name = models.CharField(null=True, max_length=255)
    pair_contract_address = models.CharField(null=True, max_length=255)
    liquidity = models.DecimalField(null=True, max_digits=25, decimal_places=15)
    dexer_url = models.URLField(null=True, max_length=1000)

    def __str__(self):
        return f'{self.exchange_name} - {self.market_pair}'


class Tag(models.Model):
    name = models.CharField(max_length=255)
    slug = models.CharField(max_length=255)

class Currency(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255) # e.g. Bitcoin
    slug = models.CharField(max_length=255)
    description = models.TextField()
    symbol = models.CharField(max_length=255) # e.g. BTC
    logo = models.URLField(max_length=1000)
    coinmarketcap_url = models.URLField(max_length=1000)
    circulating_supply = models.PositiveBigIntegerField(null=True) # coins that are circulating in the market and in the general public's hands
    total_supply = models.DecimalField(max_digits=20, decimal_places=0, null=True) # coins in existence right now minus any coins that have been verifiably burned (optional)
    max_supply = models.PositiveBigIntegerField(null=True) # maximum of coins that will ever exist in the lifetime of the asset
    platform = models.CharField(max_length=255, null=True)
    tags = models.ManyToManyField(Tag)
    pairs = models.ManyToManyField(Pair)
    last_updated = models.DateTimeField(default=timezone.now)
    date_added = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'currency'
















