from django.urls import path
from . import views



urlpatterns = [
    path('create', views.CreateNewUser, name='create-one'),
    path('<id>', views.GetOne, name='get-one'), 
]