from django.shortcuts import render
from django.http import HttpResponse

from .models import Member
# Create your views here.

def index(request):
	members = Member.objects.order_by('last_name')
	context = {'members' : members}
	
	return render(request, 'members/members.html', context)
