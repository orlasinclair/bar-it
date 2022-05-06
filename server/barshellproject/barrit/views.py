from django.shortcuts import render
from barrit.models import A_User
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core import serializers
from django.http import HttpResponse
#from project.utils import get_db_handle, get_collection_handle

#db_handle, mongo_client = get_db_handle(DATABASE_NAME, DATABASE_HOST, DATABASE_PORT, USERNAME, PASSWORD)
#collection_handle = get_collection_handle(db_handle, REGIONS_COLLECTION)
#collection_hadle.find({...})
#collection_handle.insert({...})
#collection_handle.update({...})

# Create your views here.
@csrf_exempt
def GetOne(request, id):
    if request.method == 'POST':
        user = A_User.getById(id)
        output = request.POST
        DM_Changed = output.get('darkmode')
        AD_Changed = output.get('audiodescription')
        if DM_Changed != None:
            if output['darkmode'] == "true":
                user.darkmode = True
            else:
                user.darkmode = False
        if AD_Changed != None:
            if output['audiodescription'] == "true":
                user.audiodescription = True
            else:
                user.audiodescription = False
        user.save(update_fields=['audiodescription', 'darkmode'])
        output = serializers.serialize('json', [user])
        return HttpResponse(output, content_type='application/json')
    else:
        user = A_User.getById(id)
        output = serializers.serialize('json', [user])
        return HttpResponse(output, content_type='application/json')


@csrf_exempt
def CreateNewUser(request):
    if request.method == 'POST':
        user = A_User.objects.create()
        return render(request, 'noterrors/thankyou.html')



