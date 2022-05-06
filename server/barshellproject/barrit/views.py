from django.shortcuts import render
from barrit.forms import SetUpForm
from barrit.models import A_User
#from project.utils import get_db_handle, get_collection_handle

#db_handle, mongo_client = get_db_handle(DATABASE_NAME, DATABASE_HOST, DATABASE_PORT, USERNAME, PASSWORD)
#collection_handle = get_collection_handle(db_handle, REGIONS_COLLECTION)
#collection_hadle.find({...})
#collection_handle.insert({...})
#collection_handle.update({...})

# Create your views here.
def GetOne(request, id):
    if request.method == 'POST':
        print("posted")
    else:
        form = SetUpForm()
        user = A_User.getById(id)
        output = {'output': user}
        print("print user", user)
        print("print input id", id)
        return render(request, 'noterrors/GetById.html', context = output)



