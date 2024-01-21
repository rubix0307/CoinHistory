from django.db import models
from django.utils import timezone


class Tag(models.Model):
    name = models.CharField(max_length=255)
    slug = models.CharField(max_length=255)

class Platform(models.Model):
    # e.g. EOS, NEO, Ethereum, proprietary blockchain
    name = models.CharField(max_length=255)
    slug = models.CharField(max_length=255)
    symbol = models.CharField(max_length=255)

class Url(models.Model):
    url = models.URLField(max_length=1000)

class Currency(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255) # e.g. Bitcoin
    slug = models.CharField(max_length=255)
    description = models.TextField()
    symbol = models.CharField(max_length=255) # e.g. BTC
    logo = models.URLField(max_length=1000)
    coinmarketcap_url = models.URLField(max_length=1000)
    circulating_supply = models.PositiveBigIntegerField() # coins that are circulating in the market and in the general public's hands
    total_supply = models.DecimalField(max_digits=20, decimal_places=0, null=True) # coins in existence right now minus any coins that have been verifiably burned (optional)
    max_supply = models.PositiveBigIntegerField(null=True) # maximum of coins that will ever exist in the lifetime of the asset
    tags = models.ManyToManyField(Tag)
    platform = models.ForeignKey(Platform, on_delete=models.CASCADE, null=True)
    urls = models.ForeignKey(Url, on_delete=models.CASCADE, null=True)
    last_updated = models.DateTimeField(default=timezone.now)
    date_added = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'currency'
















