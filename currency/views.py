from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render
from django.utils import timezone
from temp.coin_api import get_latest
from .models import Currency, Url, Platform, Tag
from django.db.utils import IntegrityError

def index(request: WSGIRequest):
    context = {
    }
    return render(request, 'currency/index.html', context=context)

def temp_func(request: WSGIRequest):
    currency_fields = [field.name for field in Currency._meta.get_fields()]
    platform_fields = [field.name for field in Platform._meta.get_fields()]
    data = get_latest().get('data')

    for crypt_data in data:
        tags = crypt_data.get('tags', [])
        existing_tags = Tag.objects.filter(name__in=tags).values_list('name', flat=True)
        existing_tags_set = set(existing_tags)

        tags_to_create = set(tags) - existing_tags_set
        if tags_to_create:
            new_tag_objects = [Tag(name=tag_name, slug=tag_name) for tag_name in tags_to_create]
            Tag.objects.bulk_create(new_tag_objects, ignore_conflicts=True)
        all_tag_objects = Tag.objects.filter(name__in=tags)

        currency_data = {key: value for key, value in crypt_data.items() if key in currency_fields}
        currency_data.pop('tags')

        platform_data = {key: value for key, value in (crypt_data.get('platform') or {}).items() if key in platform_fields}
        if platform_data:

            try:
                platform, created = Platform.objects.get_or_create(**platform_data)
            except Exception as ex:
                platform = Platform.objects.filter(id=platform_data['id']).first()
            finally:
                currency_data.update({'platform': platform})

        else:
            currency_data.pop('platform')

        currency, created = Currency.objects.update_or_create(defaults=currency_data, id=currency_data['id'])
        currency.tags.set(all_tag_objects)


