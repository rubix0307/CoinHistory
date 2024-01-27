import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CoinHistory.settings')
django.setup()

from currency.models import Currency
from common.scraper.coinmarketcup import CMCScraper

def update_currencies_task():
    sc = CMCScraper()
    new = sc.get_listings_new()
    currencies = Currency.objects.all()

    for i in currencies:
        pairs = sc.get_market_pairs(obj=i, limit=100)







