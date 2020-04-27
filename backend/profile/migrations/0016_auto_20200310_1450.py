# Generated by Django 2.1.3 on 2020-03-10 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0015_auto_20200310_1439'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user_type',
            field=models.CharField(blank=True, choices=[('C', 'Customer'), ('M', 'Moderator'), ('S', 'Seller')], max_length=1),
        ),
    ]