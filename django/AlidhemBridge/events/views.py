from django.shortcuts import render, get_object_or_404

from .models import Event

def index(request):
	events = Event.objects.order_by('-date')
	context = {'events' : events, 'active' : events.first()}
	return render(request, 'events/events.html', context)
	
def detail(request, event_id):
	event_detail = get_object_or_404(Event, pk=event_id)
	events = Event.objects.order_by('-date')
	context = {'events' : events, 'active' : event_detail}
	return render(request, 'events/events.html', context)
