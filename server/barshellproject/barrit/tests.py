from django.contrib.auth.models import User
from django.test import Client, TestCase
from django.urls import reverse
import json

from .models import A_User

# Create your tests here.
class BaseTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.user = A_User.objects.create(audiodescription = True, darkmode = False, id = '5bdcd93b-2075-4dfa-9a25-54ec1ee81c81')



class TestBasicViews(BaseTestCase):
    c = Client()

    def test_get(self):
        response = json.loads(self.c.get('/barrit/5bdcd93b-2075-4dfa-9a25-54ec1ee81c81').content)
        print("print statement in test", response)
        for object in response:
            assert "darkmode" in object

