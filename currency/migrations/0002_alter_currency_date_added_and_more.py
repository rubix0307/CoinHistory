# Generated by Django 5.0.1 on 2024-02-12 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currency', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currency',
            name='date_added',
            field=models.BigIntegerField(default=1707747802),
        ),
        migrations.AlterField(
            model_name='currency',
            name='date_updated',
            field=models.BigIntegerField(default=1707747802),
        ),
        migrations.AlterField(
            model_name='pair',
            name='date_added',
            field=models.BigIntegerField(default=1707747802),
        ),
        migrations.AlterField(
            model_name='pair',
            name='date_updated',
            field=models.BigIntegerField(default=1707747802),
        ),
        migrations.AlterField(
            model_name='pair',
            name='id',
            field=models.IntegerField(auto_created=True, primary_key=True, serialize=False),
        ),
    ]
