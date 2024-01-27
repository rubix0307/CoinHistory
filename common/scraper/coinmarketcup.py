import re
import os
import json
from datetime import timedelta

import django
import requests
from bs4 import BeautifulSoup
from django.utils import timezone
from requests.exceptions import HTTPError

from common.edit_text import camel_to_snake

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CoinHistory.settings')
django.setup()

from currency.models import Currency, Pair, Tag


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

        all_tags = {t.name: t for t in Tag.objects.all()}
        currency_tags = []

        url = 'https://coinmarketcap.com/new/'
        response = requests.get(url=url, headers=self.headers)

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
                break
            if slug == 'kingwif':
                print()

            new_currency = Currency(
                slug=slug,
                coinmarketcap_url=f'https://coinmarketcap.com/currencies/{slug}',
                platform=row_tds[8].text,
            )

            if slug in all_slugs:
                new_currency.last_updated=timezone.now()
                listings_exists.append(new_currency)
            else:
                new_currency.date_added=convert_to_datetime(row_tds[9].text)
                listings_new.append(new_currency)

            # search info in currency page
            response_currency_page = requests.get(url=new_currency.coinmarketcap_url, headers=self.headers)
            soup_currency_page = BeautifulSoup(response_currency_page.text, 'html.parser')

            stats = soup_currency_page.find('div', attrs={'data-module-name': "Coin-stats"})
            caption = stats.find('div', attrs={'data-role': 'el'})

            # add tags
            exists_tags = []
            new_tags = []
            for a in [a for a in stats.find_all('a', attrs={'class': 'cmc-link'}) if a.attrs['class'] == ['cmc-link']]:
                if a.text in all_tags.keys():
                    exists_tags.append(all_tags[a.text])
                else:
                    new_tags.append(Tag(name=a.text, href=a.attrs.get('href')))

            for t in new_tags:
                t.save()
            all_tags.update({t.name: t for t in new_tags})

            tags = exists_tags + new_tags
            if tags:
                currency_tags.append([new_currency, tags])

            # set main data
            new_currency.id = int(soup_currency_page.find('div', attrs={'data-role': 'chip-content-item'}).text)
            new_currency.name = caption.find('span', attrs={'data-role': 'coin-name'}).attrs.get('title')
            new_currency.description = soup_currency_page.find('div', id='section-coin-about').contents[1].text
            new_currency.symbol = caption.find('span', attrs={'data-role': 'coin-symbol'}).text
            new_currency.logo = caption.find('div', attrs={'data-role': 'coin-logo'}).contents[0].attrs.get('src')

        Currency.objects.bulk_create(listings_new)
        Currency.objects.bulk_update(listings_exists,  ['name', 'slug', 'description', 'symbol', 'logo', 'coinmarketcap_url', 'platform', 'last_updated'])

        for currency, tags_list in currency_tags:

            currency = currency._meta.model.objects.using('default').get(pk=currency.pk)
            tags_to_set = [tag._meta.model.objects.using('default').get(pk=tag.pk) for tag in tags_list]
            currency.tags.set(tags_to_set)


        return listings_new + listings_exists

    def get_market_pairs(self, *, obj: str | Currency, start: int = 1, limit: int = 10) -> list[Pair] | list:
        """
        :param obj: cryptocurrency slug. Ex: bitcoin | Currency.objects.first()
        :param start: Show pairs starting from the specified number
        :param limit: max pairs count
        :return: list[MarketPair] | []
        """

        if type(obj) == Currency:
            slug = obj.slug
            save_pairs = True
        else:
            slug = obj
            save_pairs = False


        url = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest"

        params = {
            'slug': slug,
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

            pairs = [Pair(**{camel_to_snake(k): v for k, v in pair.items() if not k == 'quotes'}) for pair in
                    data.get('data', {}).get('marketPairs', {}) if pair.get('isVerified')]

            if save_pairs:
                Pair.objects.bulk_create(pairs, ignore_conflicts=True)
                Pair.objects.bulk_update(pairs, fields=['exchange_name', 'dexer_url', 'market_pair', 'price', 'volume_usd', 'volume_percent', 'effective_liquidity', 'last_updated'])
                obj.pairs.set(pairs)
                obj.last_updated = timezone.now()
                obj.save()

            return pairs

        except HTTPError as ex:
            return []
