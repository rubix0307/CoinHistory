from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render


def index(request: WSGIRequest):
    context = {
    }
    return render(request, 'currency/index.html', context=context)