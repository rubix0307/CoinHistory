# Generated by Django 5.0.1 on 2024-02-12 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currency', '0003_alter_currency_date_added_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currency',
            name='date_added',
            field=models.BigIntegerField(default=1707778233),
        ),
        migrations.AlterField(
            model_name='currency',
            name='date_updated',
            field=models.BigIntegerField(default=1707778233),
        ),
        migrations.AlterField(
            model_name='pair',
            name='date_added',
            field=models.BigIntegerField(default=1707778233),
        ),
        migrations.AlterField(
            model_name='pair',
            name='date_updated',
            field=models.BigIntegerField(default=1707778233),
        ),
        migrations.AlterField(
            model_name='pair',
            name='fee_type',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
