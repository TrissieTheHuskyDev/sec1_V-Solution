# Generated by Django 2.1.3 on 2020-03-25 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0009_auto_20200310_1450'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='productType',
            field=models.CharField(choices=[('N', 'Not available'), ('A', 'Add'), ('L', 'Launch'), ('R', 'Reserve')], default='A', max_length=1),
        ),
    ]