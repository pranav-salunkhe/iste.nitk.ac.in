# Generated by Django 3.1.14 on 2023-02-12 09:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0006_auto_20230212_1428'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galleryimage',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
