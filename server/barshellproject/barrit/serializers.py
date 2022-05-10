from rest_framework.serializers import ModelSerializer
from .models import A_User

class UserSerializer(ModelSerializer):
    class Meta:
        model = A_User
        fields = ('audiodescription', 'darkmode', 'id', 'email', 'name')
