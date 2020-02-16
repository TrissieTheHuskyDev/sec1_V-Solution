# Generated by Django 2.2.10 on 2020-02-15 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sellerID', models.IntegerField()),
                ('productID', models.IntegerField()),
                ('productName', models.CharField(max_length=50)),
                ('proDuctDesc', models.CharField(max_length=500)),
                ('category', models.CharField(max_length=20)),
                ('subcategory', models.CharField(max_length=20)),
                ('province', models.CharField(max_length=30)),
                ('district', models.CharField(max_length=30)),
                ('productType', models.CharField(max_length=1)),
                ('harvest_date', models.DateField()),
                ('price', models.FloatField()),
                ('amount', models.FloatField()),
                ('unitOfAmount', models.CharField(max_length=20)),
                ('deliverCompany', models.CharField(max_length=20)),
                ('deliverPrice', models.FloatField()),
            ],
        ),
    ]
