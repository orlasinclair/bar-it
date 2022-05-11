from django.urls import path, include
from . import views



urlpatterns = [
    path('create', views.CreateNewUser, name='create-one'),
    path('<id>', views.GetOne, name='get-one'), 
    path('signup', views.signup, name="signup" ),
    path('auth/', include('rest_auth.urls')),   
    path('auth/register/', include('rest_auth.registration.urls')),

]
