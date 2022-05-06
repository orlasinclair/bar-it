from django.urls import path
from . import views



urlpatterns = [
    path('<id>', views.GetOne, name='get-one')  
]