import time
from django.db import models, connections
from django.utils import timezone

class Pair(models.Model):

    currency = models.ForeignKey('Currency', on_delete=models.CASCADE, related_name='pair')

    market_id = models.IntegerField()
    base_currency_id = models.IntegerField()
    base_symbol = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    center_type = models.CharField(max_length=255)
    depth_usd_negative_two = models.FloatField(null=True)
    depth_usd_positive_two = models.FloatField(null=True)
    effective_liquidity = models.FloatField(null=True)
    exchange_id = models.IntegerField()
    exchange_name = models.CharField(max_length=255)
    exchange_notice = models.TextField()
    exchange_slug = models.CharField(max_length=255)
    index_price = models.IntegerField()
    is_verified = models.BooleanField()
    market_pair = models.CharField(max_length=255)
    market_reputation = models.FloatField()  # for confidence
    market_score = models.CharField(max_length=255)
    market_url = models.CharField(max_length=255)
    por_audit_status = models.IntegerField()
    price = models.FloatField(null=True)
    quote = models.FloatField(null=True)
    quote_currency_id = models.IntegerField()
    quote_symbol = models.CharField(max_length=255)
    rank = models.IntegerField()
    reserves_available = models.IntegerField()
    type = models.CharField(max_length=255)
    volume_base = models.FloatField(null=True)
    volume_excluded = models.IntegerField(null=True)
    volume_percent = models.FloatField(null=True)
    volume_quote = models.FloatField(null=True)
    volume_usd = models.FloatField(null=True)

    dexer_url = models.URLField(null=True, max_length=1000)
    fee_type = models.CharField(max_length=255, null=True)
    outlier_detected = models.IntegerField(null=True)
    liquidity = models.FloatField(null=True)
    price_excluded = models.IntegerField(null=True)
    pair_contract_address = models.CharField(null=True, max_length=255)
    platform_id = models.IntegerField(null=True)
    platform_name = models.CharField(null=True, max_length=255)

    last_updated = models.BigIntegerField() # time from coinmarketcap's response

    date_updated = models.BigIntegerField(default=int(timezone.now().timestamp()))
    date_added = models.BigIntegerField(default=int(timezone.now().timestamp()))

    def __str__(self):
        return f'{self.exchange_name} - {self.market_pair}'

    class Meta:
        ordering = ['-volume_percent']

class Tag(models.Model):
    currency = models.ForeignKey('Currency', on_delete=models.CASCADE, related_name='tag')
    name = models.CharField(max_length=255)
    href = models.CharField(max_length=255, null=True)
    category = models.CharField(max_length=255, null=True)
    slug = models.CharField(max_length=255, null=True)

class Price(models.Model):
    currency = models.ForeignKey('Currency', on_delete=models.CASCADE, related_name='price_record')
    time = models.BigIntegerField()
    price = models.FloatField(null=True)

class URL(models.Model):
    currency = models.ForeignKey('Currency', on_delete=models.CASCADE, related_name='url')
    url = models.URLField()
    type = models.CharField(max_length=255) # TODO ForeignKey

class Platform(models.Model):
    currency = models.ForeignKey('Currency', on_delete=models.CASCADE, related_name='platform')

    platform_crypto_id = models.IntegerField()
    contract_id = models.IntegerField()
    contract_address = models.CharField(max_length=255)
    contract_platform = models.CharField(max_length=255)
    contract_platform_id = models.IntegerField()
    contract_chain_id = models.IntegerField()
    contract_native_currency_name = models.CharField(max_length=255)
    contract_native_currency_symbol = models.CharField(max_length=255)
    contract_native_currency_decimals = models.IntegerField()
    contract_block_explorer_url = models.CharField(max_length=255)
    contract_explorer_url = models.CharField(max_length=255)
    contract_decimals = models.IntegerField(null=True)
    sort = models.IntegerField()

class Audit(models.Model):
    currency = models.ForeignKey('Currency', on_delete=models.CASCADE, related_name='audit')
    auditor = models.CharField(max_length=255)
    audit_status = models.IntegerField()
    audit_time = models.BigIntegerField()
    report_url = models.URLField()
    score = models.IntegerField(null=True)

class Currency(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    slug = models.CharField(max_length=255)
    description = models.TextField()
    symbol = models.CharField(max_length=255)
    logo = models.URLField(max_length=1000)
    coinmarketcap_url = models.URLField(max_length=1000)
    dex_volume = models.FloatField(null=True)

    circulating_supply = models.PositiveBigIntegerField(null=True)
    self_reported_circulating_supply = models.FloatField(null=True)
    fully_diluted_market_cap = models.FloatField(null=True)
    total_supply = models.FloatField(null=True)
    max_supply = models.DecimalField(max_digits=65, decimal_places=0, null=True)
    is_infinite_max_supply = models.BooleanField(null=True)

    is_audited = models.BooleanField(null=True)

    status = models.CharField(max_length=255) # TODO ForeignKey
    category = models.CharField(max_length=255) # TODO ForeignKey

    launch_price = models.FloatField(null=True)
    date_launched = models.BigIntegerField(null=True)
    date_updated = models.BigIntegerField(default=int(timezone.now().timestamp()))
    date_added = models.BigIntegerField(default=int(timezone.now().timestamp()))

    def get_latest_pair(self, limit=100) -> list | list[Pair]:
        raw_sql = f'''
            SELECT cp.*
            FROM currency_pair cp
            INNER JOIN (
              SELECT
                market_id,
                currency_id,
                MAX(date_updated) as last_updated
              FROM currency_pair
              GROUP BY market_id, currency_id
            ) AS latest
            ON cp.market_id = latest.market_id
            AND cp.currency_id = latest.currency_id
            AND cp.date_updated = latest.last_updated
            
            WHERE cp.currency_id = {self.id}
            ORDER BY cp.market_reputation DESC, cp.volume_usd DESC
            LIMIT {limit}
        '''

        with connections['default'].cursor() as cursor:
            # TODO exceptions
            cursor.execute(raw_sql)
            columns = [col[0] for col in cursor.description]
            data = cursor.fetchall()

            pairs = [Pair(**dict(zip(columns, row))) for row in data]
            return pairs
    def __str__(self):
        return f'<{self.__class__.__name__}>: {self.name} ({self.id})'

    def __repr__(self):
        return self.__str__()

    class Meta:
        db_table = 'currency'





