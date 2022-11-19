from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductDetail',
            fields=[
                ('id', models.BigIntegerField(primary_key=True, serialize=False)),
                ('image', models.TextField(null=True)),
                ('name', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=2, default=False, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Usage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usage_per_day', models.FloatField(default=0)),
                ('updated_at', models.DateField(auto_now=True)),
                ('product_detail', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='rest.productdetail')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ProductToBuy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.PositiveSmallIntegerField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='rest.productdetail')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expiration_date', models.DateField()),
                ('amount', models.PositiveSmallIntegerField(default=1)),
                ('to_sell', models.BooleanField(default=False)),
                ('sell_amount', models.PositiveSmallIntegerField(blank=True, default=0)),
                ('sell_price', models.FloatField(blank=True, default=0.0)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('updated_at', models.DateField(auto_now=True)),
                ('detail', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='rest.productdetail')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'detail', 'expiration_date')},
            },
        ),
    ]
