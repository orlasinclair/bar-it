from django.shortcuts import render
from barrit.forms import SetUpForm
from barrit.models import A_User
from django.views.decorators.csrf import csrf_exempt
import json
#from project.utils import get_db_handle, get_collection_handle

#db_handle, mongo_client = get_db_handle(DATABASE_NAME, DATABASE_HOST, DATABASE_PORT, USERNAME, PASSWORD)
#collection_handle = get_collection_handle(db_handle, REGIONS_COLLECTION)
#collection_hadle.find({...})
#collection_handle.insert({...})
#collection_handle.update({...})

# Create your views here.
@csrf_exempt
def GetOne(request, id):
    user = A_User.getById(id)
    if request.method == 'POST':
        output = request.POST
        print("this is the data", output)
        DM_Changed = output.get('darkmode')
        AD_Changed = output.get('audiodescription')
        if DM_Changed == None:
            user.darkmode = user.darkmode
            #print("user.darkmode in first if statement", user.darkmode)
            user.save(update_fields=['darkmode'])
        else:
            user.darkmode = not user.darkmode
            #print("user.darkmode in else statement", user.darkmode)
            user.save(update_fields=['darkmode'])
        if AD_Changed == None:
            user.audiodescription = user.audiodescription
            #print("user.AD in second if statement", user.audiodescription)
            user.save(update_fields=['audiodescription'])
        else:
            user.audiodescription = not user.audiodescription
            #print("user.AD in else statement", user.audiodescription)
            user.save(update_fields=['audiodescription'])
        #print("user.DM after statements", user.darkmode)
        #print("user.AD after statements", user.audiodescription)
        

        
        output = {'output': user}
        #print("temp", output['audiodescription'])
        return render(request, 'noterrors/GetById.html', context = output)
    else:
        output = {'output': user}
        return render(request, 'noterrors/GetById.html',context = output)


@csrf_exempt
def CreateNewUser(request):
    if request.method == 'POST':
        user = A_User.objects.create()
        return render(request, 'noterrors/thankyou.html')



