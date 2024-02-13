from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from .common import get_candles_chart_data
from .models import Currency

@login_required
def index(request: WSGIRequest):
    context = {
        'currencies': Currency.objects.order_by('-date_updated').all()[:100]
    }
    return render(request, 'currency/index.html', context=context)

@login_required
def currency_detail(request: WSGIRequest, slug: str):
    currency = (Currency.objects
                .filter(slug=slug)
                .prefetch_related('pair', 'tag', 'price_record', 'url', 'platform', 'audit')
                .first()
               )

    s_grading_str = request.GET.get('smallest_grading', '')
    smallest_grading = int(s_grading_str) if s_grading_str.isdigit() else 21600
    chart_data = get_candles_chart_data(smallest_grading=smallest_grading, currency_id=currency.id)

    context = {
        'currency': currency,
        'chart_data': chart_data,
        'smallest_grading': smallest_grading,
        'last_price': chart_data[-1].close if chart_data else 0
    }

    return render(request, 'currency/currency_detail.html', context=context)