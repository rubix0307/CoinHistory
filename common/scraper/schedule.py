import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CoinHistory.settings')
django.setup()

from currency.models import Currency
from common.scraper.coinmarketcup import CMCScraper, ChartRange


def update_currencies():
    sc = CMCScraper()
    sc.get_listings_new(check_only_new=True)

    currencies = Currency.objects.all()
    for currency in currencies:
        sc.get_market_pairs(currency=currency)
        sc.get_chart_data(currency=currency, chart_range=ChartRange.day)
        sc.get_chart_data(currency=currency, chart_range=ChartRange.all)

update_currencies()





