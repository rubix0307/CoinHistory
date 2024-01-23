from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render
from django.utils import timezone
from temp.coin_api import get_latest
from .models import Currency, Tag
from django.db.utils import IntegrityError
from django.shortcuts import get_object_or_404

def index(request: WSGIRequest):
    context = {
        'currencies': Currency.objects.order_by('-date_added').all()[:1000]
    }
    return render(request, 'currency/index.html', context=context)

def currency_detail(request, slug: str):
    currency = Currency.objects.filter(slug=slug).select_related().first()
    context = {
        'currency': currency,
        'markets': currency.pairs.all(),
    }
    return render(request, 'currency/currency_detail.html', context=context)