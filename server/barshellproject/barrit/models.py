from django.db import models
import uuid


# Create your models here.

class A_User(models.Model):
    audiodescription = models.BooleanField(default=True)
    darkmode = models.BooleanField(default=False)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length= 50)
    email = models.CharField(max_length= 50)
    password = models.CharField(max_length=50)



    def getById(id):
        user = A_User.objects.get(id=id)
        return user
