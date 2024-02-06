import re
import os
import json
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

    def __init__(self, headers=None, x_request_id: str = os.getenv('X_REQUEST_ID')):

        if not headers:
            self.headers = {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cache-Control": "no-cache",
                "Cookie": "cmc_ab_group=navBar-B; gtm_session_first=%222024-01-19T10%3A46%3A55.627Z%22; _pbjs_userid_consent_data=3524755945110770; _sharedID=f8e3d3fc-0f56-47f1-a2cb-93f2642a70e9; _gid=GA1.2.351572290.1705661217; _fbp=fb.1.1705661222037.1897222133; bnc-uuid=9e197142-f3a7-4b1d-a595-4c04b8c75b7f; _gcl_au=1.1.768717298.1705661247; se_gd=VQIWxRRILHVGRYRIADwxgZZVQHQUXBRU1sWZbWkNlRSVQVVNWUcd1; se_gsd=eyMnPytlLDQmMysvNRwxNDIsB1cLBwFTWVtBVVVRU1RUElNT1; BNC_FV_KEY_EXPIRE=1705747802857; s=Fe26.2**d83021ed19aa4148aa093b5f6ac471bbe014afb3dc12f12e824307f236f80cb0*qntcts8QT30cD65HK7FbUg*wQp_1xq3YTqI5Hv1jw_kKDkuEG64pYmamTxO_NzJp9CamGFi-T5JQMsvAx4B3WnV2vwAsxyXEFT9KK5hAL5UZ9mb-BII5eh0uVrzeH4CPt3wji5vSnCmqbXxAmGxzMOpRIB1I4qXCFvgiSmES3MNztEDjNNhbOKuLpDRsjTNLSMjAXcNvbsKI-1-zm1eyR49_QhmT88SsGx4SZc_AaqHFkuKLASWUfLOIvye92030zUvjJ6-uB2ap9vhjrPvJeBJJlpq3dJNQvluXRarstS-ybQc02WS2ChlmZblGi8_4dHcMS4l8SgjI5gq16WoujWDZNqDONGj5p1JySuR_TuFN8zelVWHFxGMhpLcezMxv9qqsqcDQCsv8vCqwt6x1OAsxGmlt77oQ5wYeLG8DJ_1bKP5aSj6WbVA84Uh0vJdWltYBosJGkpuGQeHQeQuwuvXnQgBooxFGFUlTVkri5XM4YN5y6S7PoVga7gphE3SZFnZwFvl1Zk-ceYe8LauttnJX8It2KzQjx3CN8EaeZUdY0jY39WSc64emoJcYj3So6DDFG8e8yTW2WOjel5_3-ZiiwBbdZU4aDdAlsIJD1MrYui7elSUdcTEVv-zTTz3NNHqKRFx-VCBC4g1zidXuC6sM7PrUz8JaALGyB2kl3tF288YBb8CP5_5FQQgxpHGN5EflMP_QbodnFgRinV2b7jSfiU8K2cdhom_P1Sx8AYdZopcV4uR0ejuv6cMo6McerzgH3hcxkA4X8hgCe-rcCww-7MNnVJQxAMc5A_ShH1MUlpxdFiSasBC0kjJ0_ZJejIDJgzUEHl8BvJRL8EXFl03yz291S9851XsAYz-nVBHiTMDCs06orIEHeZw9VHw_GT0nEG_7PAy-zJwQZViEanI91QAKwqWkUAuZcdGe5xykJLUMOElrSwEwOOrGTOa3PoAIqdoSuLCSNnnmy6cr1PIibCdeI0xgIoZ8nDVtvqeo__wu11p0IPaPoVTXvEoBzE0eMc1Ipg95LoI2mAuQOF4TopMDKvGusDCE2xy-RMREijjWhSArplmvJmUdvy0bVkk5qZMtOTmyyiSOsjEYqz-halPzPhxu3nhrRrUq7lphA**91941bb929a2b805258bf6983c571957e032e7bf013ef661dd67506f13362e42*2Y21_trvHgbGHclFY-FVWwLWI1SW5BiGbk6wSF90v98; Authorization=BearereyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJyb2xlcyI6ImFjY291bnRXZWIsYWNjb3VudE1vYmlsZSxhY2NvdW50IiwidWlkIjo5MjE3ODk0MywiaXNzIjoiY21jLWF1dGgiLCJpYXQiOjE3MDU2NzI2MjgsInN1YiI6IjY0MWM0ODcwYmZiNGZkNzQ0MGU3YWQ2NiIsImV4cCI6MTcxMzQ0ODYyOH0.pIj8_u_INEGHCoHzFGUj8VlEa0aJgJR5Vi_mzDhx0ig; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22641c4870bfb4fd7440e7ad66%22%2C%22first_id%22%3A%2218d2154b45a515-07c2f7a46a7939-26001951-2073600-18d2154b45b89b%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThkMjE1NGI0NWE1MTUtMDdjMmY3YTQ2YTc5MzktMjYwMDE5NTEtMjA3MzYwMC0xOGQyMTU0YjQ1Yjg5YiIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjY0MWM0ODcwYmZiNGZkNzQ0MGU3YWQ2NiJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22641c4870bfb4fd7440e7ad66%22%7D%2C%22%24device_id%22%3A%2218d2154b45a515-07c2f7a46a7939-26001951-2073600-18d2154b45b89b%22%7D; cmc-theme=day; cmc-language=en; __gads=ID=9351f465ef99c91f:T=1705661219:RT=1705919408:S=ALNI_MZkjYvs0mOIR4gfyOAynJ6vG8owWg; __gpi=UID=00000d4405cba0a2:T=1705661219:RT=1705919408:S=ALNI_MYEoPGcIr4rGz2j-f4pPji7lKAxMQ; cto_bundle=6_ZHjF94c2JQUVlLWTlSeUxGdXBod3d5ZCUyRjJ1emtaUkRidlkwUnlRSldlNHk2MlRyanB1emUzN2JkUFh6Sk9NWm5xamplTHlHckpmeiUyRmt1cGlSTnAlMkZGaVFZd2Q5c0kwOUdTSVVpQmUyQzlDRTJBS2w1JTJCaEJLMSUyQjM2OWxheDJGNHZ1WDZYVDFSbzJ1bnJBNVpkTVpSTXZUdmVnZ3pmanR4d29pcG1scUp5MHBMOTI4JTNE; x-csrf-token=50eb77a8e429f0cc9841daf1475471108f9985862e666f0b17bc35722d8a26dc28b5965aa295cb63061ca650001cefc295f12fc353377b3b3da26c92f85a9d4d11f8b5d2e996df0560fc0324cd0952d7c92d259a24654af82552cb7d779968cf373e9638319a57e5d552c6d403618ea8492f52cae42f3cd2cd6cbed97394a84f; _dc_gtm_UA-40475998-1=1; gtm_session_last=%222024-01-22T12%3A21%3A11.634Z%22; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Jan+22+2024+13%3A21%3A12+GMT%2B0100+(%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0%2C+%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=0103d6dc-d44e-402d-8ff0-7e2212a39893&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0004%3A1%2CC0002%3A1&AwaitingReconsent=false; _ga=GA1.1.732502775.1705661216; _ga_VZT5E68L14=GS1.1.1705925680.17.1.1705926104.0.0.0; _gali=__next",
                "Pragma": "no-cache",
                "Sec-Ch-Ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-User": "?1",
                "Upgrade-Insecure-Requests": "1",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "X-Request-Id": x_request_id,
            }
        else:
            self.headers = headers

    def get_listings_new(self, check_only_new=False) -> list[Currency] | list:
        listings_new = []
        listings_exists = []
        all_slugs = Currency.objects.all().values_list('slug', flat=True)

        url = 'https://coinmarketcap.com/new/'
        for num_page in range(1,2): # TODO next pages
            response = requests.get(url=url, headers=self.headers, params={'page': num_page})

            try:
                response.raise_for_status()
            except HTTPError as ex:
                return []

            soup = BeautifulSoup(response.text, 'html.parser')
            rows = soup.find('tbody').find_all('tr')

            for row in rows:

                row_tds = row.find_all('td')
                slug = row_tds[2].find('a').attrs.get('href').split('/')[2]

                if check_only_new and slug in all_slugs:
                    continue

                new_currency = Currency(
                    slug=slug,
                    coinmarketcap_url=f'https://coinmarketcap.com/currencies/{slug}',
                )

                if slug in all_slugs:
                    new_currency.date_updated=timezone.now().timestamp()
                    listings_exists.append(new_currency)
                else:
                    new_currency.date_added=convert_to_datetime(row_tds[9].text).timestamp()
                    listings_new.append(new_currency)

        self.update_currencies_data(listings_exists + listings_new)

        return listings_exists + listings_new


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

    def get_json_data_by_currency_page(self, currency: Currency) -> dict:
        """
        :param currency:
        :return: dict (a lot of data for page build)
        """

        response = requests.get(currency.coinmarketcap_url, headers=self.headers)
        soup = BeautifulSoup(response.text, 'html.parser')

        data_script = soup.find('script', attrs={'id':'__NEXT_DATA__'})
        data = json.loads(data_script.text)

        data_detail = data['props']['pageProps']['detailRes']['detail']

        stats = soup.find('div', attrs={'data-module-name': "Coin-stats"})
        caption = stats.find('div', attrs={'data-role': 'el'})
        data_detail['logo'] = caption.find('div', attrs={'data-role': 'coin-logo'}).contents[0].attrs.get('src')

        return data

    def update_currencies_data(self, currencies: list[Currency]) -> list[Currency]:
        for around_num, currency in enumerate(currencies):
            print(f'{around_num=}')
            data = self.get_json_data_by_currency_page(currency=currency)
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

        return currencies

