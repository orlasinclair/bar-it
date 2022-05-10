from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserSignupForm(UserCreationForm):
    email = forms.EmailField()
    name = forms.CharField(max_length=50)
    password = forms.CharField(max_length=50)

    class Meta:
        model = User
        fields = [ 'email', 'name', 'password1', 'password2']
        widgets = {
        'password1': forms.PasswordInput(),
    }
