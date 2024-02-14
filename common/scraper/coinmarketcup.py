import random
import re
import os
import json
import time
from decimal import Decimal
from datetime import timedelta, datetime
from dataclasses import dataclass

import django
from django.db.utils import DataError
import requests
from bs4 import BeautifulSoup
from django.utils import timezone
from requests.exceptions import HTTPError

from common.common import camel_to_snake, chunk_list

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

        Currency.objects.bulk_create(currencies, ignore_conflicts=True)

        if get_all_chart_data:
            for num, currency in enumerate(currencies):
                self.get_chart_data(currency=currency, chart_range=ChartRange.all)

        return currencies

    def get_market_pairs(self, *, currency: Currency, start: int = 1) -> list[Pair] | list:
        """
        :param currency: Currency class object
        :param start: Show pairs starting from the specified number
        :return: list[MarketPair] | []
        """

        url = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest"
        limit = 500
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
        pairs = []
        market_pairs_data = True # only for while start
        try:
            while market_pairs_data is True or (market_pairs_data and len(market_pairs_data) == limit):
                response = requests.get(url, headers=self.headers, params=params)
                response.raise_for_status()
                data = json.loads(response.text)

                date_updated = int(datetime.now().timestamp())
                market_pairs_data = data.get('data', {}).get('marketPairs', {})
                pairs_data = [{
                    'market_id': pair['marketId'],

                    'base_currency_id': pair['baseCurrencyId'],
                    'base_symbol': pair['baseSymbol'],
                    'category': pair['category'],
                    'center_type': pair['centerType'],
                    'depth_usd_negative_two': pair.get('depthUsdNegativeTwo'),
                    'depth_usd_positive_two': pair.get('depthUsdPositiveTwo'),
                    'effective_liquidity': pair.get('effectiveLiquidity'),
                    'exchange_id': pair['exchangeId'],
                    'exchange_name': pair['exchangeName'],
                    'exchange_notice': pair.get('exchangeNotice'),
                    'exchange_slug': pair['exchangeSlug'],
                    'fee_type': pair.get('feeType'),
                    'index_price': pair['indexPrice'],
                    'is_verified': pair['isVerified'],
                    'last_updated': int(datetime.strptime(pair['lastUpdated'], '%Y-%m-%dT%H:%M:%S.%fZ').timestamp()),
                    'market_pair': pair['marketPair'],
                    'market_reputation': pair['marketReputation'] * 100 if pair['marketReputation'] else 0,
                    'market_score': pair['marketScore'],
                    'market_url': pair['marketUrl'],
                    'outlier_detected': pair.get('outlierDetected'),
                    'por_audit_status': pair['porAuditStatus'],
                    'price': pair['price'],
                    'price_excluded': pair.get('priceExcluded'),
                    'quote': pair['quote'],
                    'quote_currency_id': pair['quoteCurrencyId'],
                    'quote_symbol': pair['quoteSymbol'],
                    'rank': pair['rank'],
                    'reserves_available': pair['reservesAvailable'],
                    'type': pair.get('type'),
                    'volume_base': pair['volumeBase'],
                    'volume_excluded': pair.get('volumeExcluded'),
                    'volume_percent': pair['volumePercent'],
                    'volume_quote': pair['volumeQuote'],
                    'volume_usd': pair['volumeUsd'],

                    # can be None
                    'dexer_url': pair.get('dexerUrl'),
                    'liquidity': pair.get('liquidity'),
                    'pair_contract_address': pair.get('pairContractAddress'),
                    'platform_id': pair.get('platformId'),
                    'platform_name': pair.get('platformName'),

                    'date_updated': date_updated,
                } for pair in market_pairs_data]


                for p_data in pairs_data:
                    pairs.append(Pair(currency=currency, **p_data))

                start += limit
                params.update({'start': start})
        except Exception as ex:
            print(ex)

        finally:
            created = Pair.objects.bulk_create(pairs)
            return pairs

    def get_chart_data(self, currency: Currency, chart_range: ChartRange=ChartRange.day, is_save=True) -> list[ChartData]:
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
        url_fields = ['currency', 'url', 'type']
        all_urls = [dict(zip(url_fields, i)) for i in URL.objects.filter(currency__in=currencies).values_list(*url_fields).all()]

        tag_fields = ['currency', 'name', 'slug', 'category']
        all_tags = [dict(zip(tag_fields, i))for i in Tag.objects.filter(currency__in=currencies).values_list(*tag_fields).all()]

        platform_fields = ['currency','platform_crypto_id','contract_id','contract_address','contract_platform','contract_platform_id','contract_chain_id','contract_native_currency_name','contract_native_currency_symbol','contract_native_currency_decimals','contract_block_explorer_url','contract_explorer_url','contract_decimals','sort',]
        all_platforms = [dict(zip(platform_fields, platform_data))
                         for platform_data in Platform.objects.filter(currency__in=currencies).values_list(*platform_fields).all()]

        audit_fields = ['currency','auditor','audit_status','audit_time','report_url',]
        all_audits = [dict(zip(audit_fields, i)) for i in Audit.objects.filter(currency__in=currencies).values_list(*audit_fields).all()]

        new_urls = []
        new_tags = []
        new_platforms = []
        new_audits = []


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

            except Exception as ex:
                print()


            try:
                urls = [{'type': k, 'url': i}
                    for k, v in data_detail['urls'].items() if v
                    for i in v]

                for url_data in urls:
                    check_data_url = dict(currency=currency.id, **url_data)
                    if not check_data_url in all_urls:
                        all_urls.append(check_data_url)
                        new_urls.append(URL(currency=currency, **url_data))
            except Exception as ex:
                print()

            try:
                reported_tags = [{'name': t, 'category': 'selfReportedTags', 'slug': None} for t in data_detail['selfReportedTags']]
                for tag_data in data_detail['tags'] + reported_tags:
                    check_data_tag = dict(currency=currency.id, **tag_data)
                    if not check_data_tag in all_tags:
                        all_tags.append(check_data_tag)
                        new_tags.append(Tag(currency=currency, **tag_data))
            except Exception as ex:
                print()


            try:
                platform_fields = [f.name for f in Platform._meta.get_fields()]
                platforms_data = [{camel_to_snake(k):v
                              for k,v in platform.items()
                              if camel_to_snake(k) in platform_fields}
                             for platform in data_detail['platforms']]

                for platform_data in platforms_data:
                    check_data_platform = dict(currency=currency.id, **platform_data)
                    if not check_data_platform in all_platforms:
                        all_platforms.append(check_data_platform)
                        new_platforms.append(Platform(currency=currency, **platform_data))
            except Exception as ex:
                print()


            try:
                for audit_info in data_detail.get('auditInfos',[]):
                    audit_time = audit_info.get('auditTime')

                    if not audit_time:
                        continue

                    if 'T' in audit_time:
                        try:
                            audit_time = int(datetime.strptime(audit_time, '%Y-%m-%dT%H:%M:%S.%fZ').timestamp())
                        except ValueError:
                            audit_time = int(datetime.strptime(audit_time, '%Y-%m-%dT%H:%M:%SZ').timestamp())
                    else:
                        audit_time = int(datetime.strptime(audit_time, '%Y-%m-%d').timestamp())

                    audit_data = {
                        'auditor': audit_info.get('auditor'),
                        'audit_status':  audit_info.get('auditStatus'),
                        'audit_time':  audit_time,
                        'report_url':  audit_info.get('reportUrl'),
                    }
                    check_data_audit = dict(currency=currency.id, **audit_data)
                    if not check_data_audit in all_audits:
                        all_audits.append(check_data_audit)
                        new_audits.append(Audit(currency=currency, **audit_data))

            except Exception as ex:
                print()

            pairs = self.get_market_pairs(currency=currency)
            chart_data = self.get_chart_data(currency=currency, chart_range=ChartRange.day)

        currency_fields = [f.name for f in Currency._meta.get_fields() if not f.name in ['id'] and not f.one_to_many]
        Currency.objects.bulk_update(currencies, fields=currency_fields)
        URL.objects.bulk_create(new_urls)
        Tag.objects.bulk_create(new_tags)
        Platform.objects.bulk_create(new_platforms)
        Audit.objects.bulk_create(new_audits)

        return currencies

if __name__ == '__main__':
    curr = CMCScraper().get_listings_new()

