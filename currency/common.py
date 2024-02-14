from dataclasses import dataclass, asdict
from typing import get_type_hints
from django.db import connections
from .models import Price


@dataclass
class CandleData:
    time: int
    open: float = None
    high: float = None
    low: float = None
    close: float = None
    value: float = None

    def dict(self):
        # Only to easily create const data in _chart.html in the JS part
        type_hints = get_type_hints(CandleData)
        return {k: type_hints[k](v) for k, v in asdict(self).items() if v}

def get_candles_chart_data(*, smallest_grading: int, currency_id: int) -> list[CandleData]:
    """
    :param smallest_grading: int Value of period for candles assembly (in seconds)
    :param currency_id: id models.Currency
    :return: list[CandleData]
    """

    raw_sql = f"""
        SELECT
            MAX(time) as time,
            MAX(price) AS high,
            MIN(price) AS low,
            SPLIT_PART(MIN(CONCAT(LPAD(CAST(time AS TEXT), 10, '0'), '_', price)), '_', 2) AS open,
            SPLIT_PART(MAX(CONCAT(LPAD(CAST(time AS TEXT), 10, '0'), '_', price)), '_', 2) AS close
        FROM (SELECT *, FLOOR(time/{smallest_grading}) AS n FROM currency_price WHERE currency_id = {currency_id}
              UNION
              SELECT *, FLOOR(time/{smallest_grading})-1 AS n FROM currency_price WHERE currency_id = {currency_id} AND (time%{smallest_grading}) = 0
             ) AS union_table
        GROUP BY n
        ORDER BY time
    """

    with connections['default'].cursor() as cursor:
        # TODO exceptions
        cursor.execute(raw_sql)
        # columns = [col[0] for col in cursor.description]

        all_data = cursor.fetchall()

        time_line = {}
        if len(all_data) > 1:
            for t in range(all_data[1][0], all_data[-1][0] + 1, smallest_grading):
                time_line.update({t:CandleData(**{'time': t, 'high': None, 'low': None, 'open': None, 'close': None, 'value': None})})

        for d in all_data:
            time_line.update({d[0]:CandleData(**{'time': d[0], 'high': float(d[1]), 'low': float(d[2]), 'open': float(d[3]), 'close': float(d[4]), 'value': float(d[4])})})


        candle_data = [i for i in time_line.values()]

    return candle_data
