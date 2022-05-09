from django.db import models
import uuid


# Create your models here.

class A_User(models.Model):
    audiodescription = models.BooleanField(default=True)
    darkmode = models.BooleanField(default=False)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)


    def getById(uuid):
        user = A_User.objects.get(uuid=uuid)
        return user
