# Generated by Django 4.1.3 on 2022-11-19 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='avatar',
            field=models.URLField(default='https://slack-infra-latency.slack.com/avatarsource/TL513E005-UKTJEKSKD-7286d596ec95-128'),
        ),
    ]
