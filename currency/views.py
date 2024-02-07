from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render

from .common import get_candles_chart_data
from .models import Currency


def index(request: WSGIRequest):
    context = {
        'currencies': Currency.objects.order_by('-date_added').all()[:1000]
    }
    return render(request, 'currency/index.html', context=context)


def currency_detail(request: WSGIRequest, slug: str):
    currency = (Currency.objects
                .filter(slug=slug)
                .prefetch_related('pair', 'tag', 'price_record', 'url', 'platform', 'audit')
                .first()
               )

    tp_str = request.GET.get('time_period', '')
    time_period = int(tp_str) if tp_str.isdigit() else 21600
    chart_data = get_candles_chart_data(time_period=time_period, currency_id=currency.id)

    context = {
        'currency': currency,
        'chart_data': chart_data,
        'time_period': time_period,
    }

    return render(request, 'currency/currency_detail.html', context=context)