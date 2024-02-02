from dataclasses import dataclass, asdict
from typing import get_type_hints
from django.db import connections
from .models import Value


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

def get_candles_chart_data(*, time_period: int, currency_id: int) -> list[CandleData]:
    """
    :param time_period: int Value of period for candles assembly (in seconds)
    :param currency_id: id models.Currency
    :return: list[CandleData]
    """

    db_table = Value._meta.db_table
    raw_sql = f"""
        -- make time frame for all currency data
        WITH RECURSIVE TimeSeries (time) AS (
            SELECT (SELECT MIN(time) FROM {db_table} WHERE currency_id = {currency_id}) -- start
            UNION ALL
            SELECT time + {time_period} -- step
            FROM TimeSeries
            WHERE time < (SELECT MAX(time) FROM {db_table} WHERE currency_id = {currency_id})  -- end
        )
        
        -- make candlesticks data
        SELECT
              FLOOR(time) AS time,
              SUBSTRING_INDEX(MIN(CONCAT(LPAD(time, 10, '0'), '_', price)), '_', -1) AS open,
              MAX(price) AS high,
              MIN(price) AS low,
              SUBSTRING_INDEX(MAX(CONCAT(LPAD(time, 10, '0'), '_', price)), '_', -1) AS close,
              SUBSTRING_INDEX(MAX(CONCAT(LPAD(time, 10, '0'), '_', price)), '_', -1) AS value
        FROM (SELECT *, FLOOR(time/{time_period}) AS n FROM {db_table} WHERE currency_id = {currency_id}
              UNION
              SELECT *, FLOOR(time/{time_period})-1 AS n FROM {db_table} WHERE currency_id = {currency_id} AND !(time%{time_period})
              UNION
              SELECT null as id, ts.time as time, null as price, {currency_id} as currency_id, FLOOR(time/{time_period}) AS n FROM TimeSeries AS ts
             ) AS union_table
        GROUP BY n
    """

    with connections['default'].cursor() as cursor:
        # TODO exceptions
        cursor.execute(raw_sql)
        columns = [col[0] for col in cursor.description]
        data = cursor.fetchall()

        chart_data = [CandleData(**dict(zip(columns, [float(r) if type(r) == str else r for r in row]))) for row in
                      (data[1:-1] if len(data) > 2 else data)]

    return chart_data
