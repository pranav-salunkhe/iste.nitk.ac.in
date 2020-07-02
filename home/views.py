from django.shortcuts import render
from datetime import datetime
from account.models import SIG, User, Core
from project.models import Project
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.management import call_command
from django.core.wsgi import get_wsgi_application 
from django.conf import settings
import subprocess

def indexView(request):
    this_year = datetime.now().year
    years_in_operation = this_year-1995
    sigs = SIG.objects.all()
    member_count = User.objects.filter(
        batch_of__in = [this_year+3, this_year+2, this_year+1]
    ).count()
    
    sig_count = sigs.count()
    project_count = Project.objects.filter(
        year = this_year
    ).count()
    
    project_count = 20
    member_count = User.objects.all().count()
    core = Core.objects.all()
    context = {
        'core':core, 'sigs':sigs,
        'year':years_in_operation, 'member':member_count,
        'sig':sig_count, 'project':project_count
    }
    return render(request,'home/index.html',context)

@require_POST
@csrf_exempt
def deployView(request):
    subprocess.check_output(['git', 'pull'])
    subprocess.check_output(['pip3', 'install', '-r', 'requirements.txt'])
    application = get_wsgi_application()
    call_command('makemigrations')
    call_command('migrate')

    return render(request,'home/index.html',{})