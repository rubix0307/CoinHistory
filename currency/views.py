from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render
from django.utils import timezone
from .models import Currency, Tag, Value
from django.db import connections

def index(request: WSGIRequest):
    context = {
        'currencies': Currency.objects.order_by('-date_added').all()[:1000]
    }
    return render(request, 'currency/index.html', context=context)

def currency_detail(request, slug: str):
    currency = Currency.objects.filter(slug=slug).prefetch_related('tags', 'pairs').first()

    time_period = 3600
    raw_sql = f"""
        SELECT
            FLOOR(time) as start_time,
            SUBSTRING_INDEX(MIN(CONCAT(LPAD(time, 10, '0'), '_', price)), '_', -1) as open_price,
            MAX(price) AS high_price,
            MIN(price) AS low_price,
            SUBSTRING_INDEX(MAX(CONCAT(LPAD(time, 10, '0'), '_', price)), '_', -1) AS close_price 
        FROM (SELECT *, FLOOR(time/{time_period}) AS n FROM {Value._meta.db_table}
              UNION
              SELECT *, FLOOR(time/{time_period})-1 AS n FROM {Value._meta.db_table} WHERE !(time%{time_period})) AS union_table
        GROUP BY n
    """


    with connections['default'].cursor() as cursor:
        cursor.execute(raw_sql)
        columns = [col[0] for col in cursor.description]
        data = cursor.fetchall()
        chart_data = [dict(zip(columns, [int(r) if type(r) == str else r for r in row ])) for row in (data[1:-1] if data else data)]

    context = {
        'currency': currency,
        'chart_data': chart_data,
    }
    return render(request, 'currency/currency_detail.html', context=context)