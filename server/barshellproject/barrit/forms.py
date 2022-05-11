from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import A_User

class UserSignupForm(UserCreationForm):
    email = forms.EmailField()
    name = forms.CharField(max_length=100)
    password = forms.CharField(max_length=100)

    class Meta:
        model = A_User
        fields = ['audiodescription', 'darkmode', 'email', 'name']
     
class CustomUserSignupForm(UserChangeForm):
    class Meta:
        model = A_User
        fields = UserChangeForm.Meta.fields
