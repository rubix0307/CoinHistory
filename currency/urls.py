
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.temp_func, name='currency_index'),
]
