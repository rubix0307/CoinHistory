
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='currency_index'),
    path('<str:slug>', views.currency_detail, name='currency_detail'),
]
