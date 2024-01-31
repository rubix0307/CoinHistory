from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render
from django.utils import timezone

from .common import get_chart_data, CandleData
from .models import Currency, Tag, Value


def index(request: WSGIRequest):
    context = {
        'currencies': Currency.objects.order_by('-date_added').all()[:1000]
    }
    return render(request, 'currency/index.html', context=context)


def currency_detail(request: WSGIRequest, slug: str):
    currency = Currency.objects.filter(slug=slug).prefetch_related('tags', 'pairs').first()

    tp_str = request.GET.get('time_period', '')
    time_period = int(tp_str) if (type(tp_str) == int or tp_str.isdigit()) else 900
    chart_data = get_chart_data(time_period=time_period, currency_id=currency.id)

    context = {
        'currency': currency,
        'chart_data': chart_data,
    }

    return render(request, 'currency/currency_detail.html', context=context)