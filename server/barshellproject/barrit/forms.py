from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from barrit.models import A_User

class SetUpForm(forms.ModelForm):
    audiodescription = forms.BooleanField(required=False)
    darkmode = forms.BooleanField(required=False)



    class Meta:
        model = User
        fields = ('audiodescription', 'darkmode')