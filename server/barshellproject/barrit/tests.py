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
        assert "darkmode" in response[0]['fields']
        assert "audiodescription" in response[0]['fields']
        assert response[0]['fields']['audiodescription'] == True
        assert response[0]['fields']['darkmode'] == False
        assert response[0]['pk'] == '5bdcd93b-2075-4dfa-9a25-54ec1ee81c81'

    def test_update_user(self):
        response = json.loads(self.c.post('/barrit/5bdcd93b-2075-4dfa-9a25-54ec1ee81c81', {
            'darkmode': 'true',
            'audiodescription': 'false'
        }).content)
        assert "darkmode" in response[0]['fields']
        assert "audiodescription" in response[0]['fields']
        assert response[0]['fields']['audiodescription'] == False
        assert response[0]['fields']['darkmode'] == True
        assert response[0]['pk'] == '5bdcd93b-2075-4dfa-9a25-54ec1ee81c81'


    def test_create_user(self):
        response = self.c.post('/barrit/create')
        assert "noterrors/thankyou.html" in [t.name for t in response.templates]



