# Generated by Django 4.0.4 on 2022-05-06 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('barrit', '0003_alter_a_user_darkmode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='a_user',
            name='darkmode',
            field=models.BooleanField(default=False),
        ),
    ]
