# Generated by Django 4.1.3 on 2022-11-19 23:32

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('rest', '0002_fake_data'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usage',
            old_name='usage_per_day',
            new_name='coefficient',
        ),
        migrations.AddField(
            model_name='usage',
            name='weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterUniqueTogether(
            name='usage',
            unique_together={('product_detail', 'user')},
        ),
    ]
