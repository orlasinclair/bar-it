from os import truncate
from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


# Create your models here.

class A_User(AbstractUser):
    audiodescription = models.BooleanField(default=True)
    darkmode = models.BooleanField(default=False)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length= 50, default="")
    email = models.CharField(max_length= 50, default='')
    password = models.CharField(max_length=50, default="")
    username = models.CharField(max_length=140, default="", unique=True)

    def __str__(self):
        return self



    def getById(uuid):
        user = A_User.objects.get(uuid=uuid)
        return user
