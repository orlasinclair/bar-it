from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import UserSignupForm, CustomUserSignupForm
from .models import A_User

# Register your models here.
class CustomUserAdmin(UserAdmin):    
    add_form = UserSignupForm
    form = CustomUserSignupForm
    model = A_User
    list_display = ['audiodescription', 'darkmode', 'id', 'email', 'name']


admin.site.register(A_User, CustomUserAdmin)
