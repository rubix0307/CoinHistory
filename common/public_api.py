import json
import os
from typing import Union
from dataclasses import dataclass

import requests
from requests.exceptions import HTTPError
from dotenv import load_dotenv

load_dotenv('.env')


@dataclass
class MarketPair:
    baseCurrencyId: int
    baseSymbol: str
    category: str
    centerType: str
    depthUsdNegativeTwo: float
    depthUsdPositiveTwo: float
    effectiveLiquidity: float
    exchangeId: int
    exchangeName: str
    exchangeNotice: str
    exchangeSlug: str
    feeType: str
    indexPrice: int
    isVerified: int
    lastUpdated: str
    marketId: int
    marketPair: str
    marketReputation: int
    marketScore: str
    marketUrl: str
    outlierDetected: int
    porAuditStatus: int
    price: float
    priceExcluded: int
    quote: float
    quoteCurrencyId: int
    quotes: list
    quoteSymbol: str
    rank: int
    reservesAvailable: int
    type: str
    volumeBase: float
    volumeExcluded: int
    volumePercent: float
    volumeQuote: float
    volumeUsd: float
    platformId: int = None
    platformName: str = None
    pairContractAddress: str = None
    liquidity: float = None
    dexerUrl: str = None

    def __str__(self):
        return f'{self.exchangeName} - {self.marketPair}'

def get_market_pairs(*, slug: str, start:int = 1, limit:int = 10, x_request_id:str = os.getenv('X_REQUEST_ID')) ->  Union[list[MarketPair], list]:
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

        return [MarketPair(**pair) for pair in data.get('data',{}).get('marketPairs', {}) if pair.get('isVerified')]

    except HTTPError as ex:
        return []

