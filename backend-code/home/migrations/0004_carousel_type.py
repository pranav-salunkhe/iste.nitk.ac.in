# Generated by Django 3.0.7 on 2021-03-20 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20210320_1022'),
    ]

    operations = [
        migrations.AddField(
            model_name='carousel',
            name='type',
            field=models.CharField(choices=[('1', 'Mobile'), ('2', 'Desktop')], default='Desktop', max_length=10),
        ),
    ]
