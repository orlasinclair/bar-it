from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SetUpForm(UserCreationForm):
    audiodescription = forms.BooleanField()
    darkmode = forms.BooleanField()

    class Meta:
        model = User
        fields = ('audiodescription', 'darkmode')