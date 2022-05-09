from django.urls import path
from . import views



urlpatterns = [
    path('create', views.CreateNewUser, name='create-one'),
    path('<uuid>', views.GetOne, name='get-one'), 
]
