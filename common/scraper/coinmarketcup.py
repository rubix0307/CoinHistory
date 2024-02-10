import random
import re
import os
import json
import time
from decimal import Decimal
from datetime import timedelta, datetime
from dataclasses import dataclass

import django
import requests
from bs4 import BeautifulSoup
from django.utils import timezone
from requests.exceptions import HTTPError

from common.edit_text import camel_to_snake

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CoinHistory.settings')
django.setup()

from currency.models import Currency, Pair, Tag, Price, Platform, URL, Audit


class ChartRange:
    day = '1D' # step 5 min
    week = '7D' # step 10-15 min
    month = '1M' # step 10-15 min
    year = '1Y' # step 10-15 min
    all = 'ALL' # step 10-15 min

@dataclass
class ChartData:
    currency: Currency
    time: int
    price: float

    def dict(self):
        # for objects.update_or_create
        return {'currency': self.currency, 'time': self.time, 'defaults': {'price': self.price}}


def convert_to_datetime(time_string):

    current_time = timezone.now()
    matched = re.match(r"(\d+)\s+(\w+)\s+ago", time_string)
    if not matched:
        return None

    offset = dict(zip([matched.group(2)], [int(matched.group(1))]))

    if matched.group(2) in ['minutes', 'hours', 'day', 'days']:
        if matched.group(2) == 'day':
            offset['days'] = offset.pop('day')

        return current_time - timedelta(**offset)
    return None


class CMCScraper:

    def __init__(self, headers=None):

        if not headers:
            self.headers = {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
                "Sec-Ch-Ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-User": "?1",
                "Upgrade-Insecure-Requests": "1",
                "User-Agent": f"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/{random.randint(400, 537)}.36 (KHTML, like Gecko) Chrome/{random.randint(100, 120)}.0.0.0 Safari/{random.randint(400, 537)}.36",
            }
        else:
            self.headers = headers


    def get_listings_new(self, is_all_pages=False, get_all_chart_data=False) -> list[Currency] | list:
        """
        :param is_all_pages: bool; If False - check only first 500
        :param get_all_chart_data: query chart data for each currency
        :return: list with or without Currency
        """
        added_list = []
        currencies = []
        all_slugs = Currency.objects.all().values_list('slug', flat=True)
        url = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight'

        start_num = 1
        limit = 500
        params = {
            'dataType': 8,
            'limit': limit,
            'start': start_num,
        }

        recently_added_list = True # True only for while start
        while recently_added_list:

            response = requests.get(url=url, headers=self.headers, params=params)
            data = json.loads(response.text)

            recently_added_list = data.get('data',{}).get('recentlyAddedList',[])
            added_list += recently_added_list

            start_num += limit
            params.update({'start': start_num})

            if not is_all_pages:
                break

        for round_num, currency_data in enumerate(added_list):
            slug = currency_data.get('slug')
            if not slug or slug in all_slugs:
                continue

            currency = Currency(
                id=currency_data['id'],
                name=currency_data['name'],
                slug=slug,
                coinmarketcap_url=f'https://coinmarketcap.com/currencies/{slug}/',
                date_added=int(datetime.strptime(currency_data['addedDate'], '%Y-%m-%dT%H:%M:%S.%fZ').timestamp())
            )
            currencies.append(currency)

        Currency.objects.bulk_create(currencies)

        if get_all_chart_data:
            for num, currency in enumerate(currencies):
                self.get_chart_data(currency=currency, chart_range=ChartRange.all)

        return currencies

    def get_market_pairs(self, *, currency: Currency, start: int = 1, limit: int = 10) -> list[Pair] | list:
        """
        :param currency: Currency class object
        :param start: Show pairs starting from the specified number
        :param limit: max pairs count
        :return: list[MarketPair] | []
        """

        url = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest"

        params = {
            'slug': currency.slug,
            'start': start,
            'limit': limit,
            'category': 'spot',
            'centerType': 'all',
            'sort': 'rank',
            'direction': 'desc',
            'spotUntracked': 'true',
        }

        try:
            response = requests.get(url, headers=self.headers, params=params)
            response.raise_for_status()
            data = json.loads(response.text)

            pairs_data = [{camel_to_snake(k): v for k, v in pair.items() if not k == 'quotes'} for pair in
                    data.get('data', {}).get('marketPairs', {}) if pair.get('isVerified')]

            pairs = []
            for p_data in pairs_data:
                p_data.update({'date_updated': int(datetime.strptime(p_data['last_updated'], '%Y-%m-%dT%H:%M:%S.%fZ').timestamp())})
                del p_data['last_updated']
                pairs.append(Pair(currency=currency, **p_data))

            Pair.objects.bulk_create(pairs, ignore_conflicts=True)
            Pair.objects.bulk_update(pairs, fields=[f.name for f in Pair._meta.get_fields() if not f.name in ['market_id', 'currency']])

            return pairs

        except HTTPError as ex:
            return []

    def get_chart_data(self, currency: Currency, chart_range: ChartRange=ChartRange.all, is_save=True) -> list[ChartData]:
        # TODO exceptions
        url = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart'
        params = {
            'id': currency.id,
            'range': chart_range,
        }
        response = requests.get(url, headers=self.headers, params=params)
        data = json.loads(response.text)

        chart_data = [ChartData(currency=currency, time=int(i), price=data['data']['points'][i]['v'][0]) for i in data['data']['points']]

        if is_save:
            for cd in chart_data:
                Price.objects.update_or_create(**cd.dict())
        return chart_data

    def get_json_data_by_currency_page(self, currency: Currency) -> dict | bool:
        """
        :param currency:
        :return: dict (a lot of data for page build)
        """

        response = requests.get(currency.coinmarketcap_url, headers=self.headers)
        soup = BeautifulSoup(response.text, 'html.parser')

        data_script = soup.find('script', attrs={'id':'__NEXT_DATA__'})
        try:
            data = json.loads(data_script.text)
        except Exception as ex:
            return False

        data_detail = data['props']['pageProps']['detailRes']['detail']

        stats = soup.find('div', attrs={'data-module-name': "Coin-stats"})
        caption = stats.find('div', attrs={'data-role': 'el'})
        data_detail['logo'] = caption.find('div', attrs={'data-role': 'coin-logo'}).contents[0].attrs.get('src')

        return data

    def update_currencies_data(self, currencies: list[Currency]) -> list[Currency]:

        for around_num, currency in enumerate(currencies):

            data = self.get_json_data_by_currency_page(currency=currency)
            if not data:
                continue

            data_detail = data['props']['pageProps']['detailRes']['detail']

            s_rep_circ_supply = data_detail.get('selfReportedCirculatingSupply')

            try:
                currency.id = data_detail['id']
                currency.name = data_detail['name']
                currency.slug = data_detail['slug']
                currency.description = data_detail['description']
                currency.symbol = data_detail['symbol']
                currency.logo = data_detail['logo']
                currency.coinmarketcap_url = f'https://coinmarketcap.com/currencies/{data_detail["slug"]}/'
                currency.dex_volume = data_detail.get('dexVolume')
                currency.circulating_supply = data_detail['statistics']['circulatingSupply']
                currency.self_reported_circulating_supply = float(s_rep_circ_supply) if s_rep_circ_supply else None
                currency.total_supply = data_detail['statistics'].get('totalSupply')
                currency.max_supply = data_detail['statistics'].get('maxSupply')
                currency.fully_diluted_market_cap = data_detail['statistics'].get('fullyDilutedMarketCap')
                currency.is_infinite_max_supply = data_detail['isInfiniteMaxSupply']
                currency.is_audited = data_detail['isAudited']
                currency.status = data_detail['status']
                currency.category = data_detail['category']
                currency.launch_price = data_detail['launchPrice']
                currency.date_launched = int(datetime.fromisoformat(data_detail['dateLaunched'].replace('Z', '+00:00')).timestamp()) if data_detail['dateLaunched'] else None # TODO
                currency.date_updated = int(timezone.now().timestamp())
                currency.save()

            except Exception as ex:
                print()


            try:
                urls = [{'type': k, 'url': i}
                    for k, v in data_detail['urls'].items() if v
                    for i in v]

                for url in urls:
                    URL.objects.update_or_create(currency=currency, **url)
            except Exception as ex:
                print()

            try:
                for tag in data_detail['tags']:
                    Tag.objects.update_or_create(currency=currency, **tag)
            except Exception as ex:
                print()


            try:
                platform_fields = [f.name for f in Platform._meta.get_fields()]
                platforms = [{camel_to_snake(k):v
                              for k,v in platform.items()
                              if camel_to_snake(k) in platform_fields}
                             for platform in data_detail['platforms']]
            except Exception as ex:
                print()

            try:
                for platform in platforms:
                    Platform.objects.update_or_create(currency=currency, **platform)
            except Exception as ex:
                print()


            try:
                for audit_info in data_detail.get('auditInfos',[]):
                    audit_time = audit_info.get('auditTime')
                    if 'T' in audit_time:
                        audit_time = int(datetime.strptime(audit_time, '%Y-%m-%dT%H:%M:%S.%fZ').timestamp())
                    else:
                        audit_time = int(datetime.strptime(audit_time, '%Y-%m-%d').timestamp())

                    audit_data = {
                        'auditor': audit_info.get('auditor'),
                        'audit_status':  audit_info.get('auditStatus'),
                        'audit_time':  audit_time,
                        'report_url':  audit_info.get('reportUrl'),
                    }

                    score = audit_info.get('score')
                    if score and score != 'N/A':
                        audit_data.update({'score': score})

                    Audit.objects.update_or_create(currency=currency, **audit_data)

            except Exception as ex:
                print()

            pairs = self.get_market_pairs(currency=currency, limit=100)
            chart_data = self.get_chart_data(currency=currency, chart_range=ChartRange.day)

        return currencies