import json
import os
import re
from typing import Union

import django
import requests
from requests.exceptions import HTTPError
from dotenv import load_dotenv


load_dotenv('.env')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CoinHistory.settings')
django.setup()

from common.edit_text import camel_to_snake
from currency.models import Pair, Currency


def get_market_pairs(*, slug: str, start:int = 1, limit:int = 10, x_request_id:str = os.getenv('X_REQUEST_ID')) ->  Union[list[Pair], list]:
    """
    :param slug: cryptocurrency slug. Ex: bitcoin
    :param start: Show pairs starting from the specified number
    :param limit: max pairs count
    :param x_request_id: id for request. Check back when the markets have loaded, for ex
                         https://coinmarketcap.com/currencies/bitcoin/
    :return: list[MarketPair] | []
    """

    url = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest"
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        'Origin': 'https://coinmarketcap.com',
        'Platform': 'web',
        'Pragma': 'no-cache',
        'Referer': 'https://coinmarketcap.com/',
        'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'X-Request-Id': x_request_id,
    }
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
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        data = json.loads(response.text)

        return [Pair(**{camel_to_snake(k): v for k, v in pair.items() if not k == 'quotes'}) for pair in data.get('data',{}).get('marketPairs', {}) if pair.get('isVerified')]

    except HTTPError as ex:
        return []
