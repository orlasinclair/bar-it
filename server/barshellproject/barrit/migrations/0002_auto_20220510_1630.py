# Generated by Django 3.1 on 2022-05-10 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('barrit', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='a_user',
            name='email',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='a_user',
            name='name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='a_user',
            name='password',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='a_user',
            name='username',
            field=models.CharField(default='', max_length=140, unique=True),
        ),
    ]