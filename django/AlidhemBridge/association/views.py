from django.shortcuts import render, get_object_or_404

from .models import Statute, BoardMeeting, Annual, Motion

def index(request):
	context = get_context()
	return render(request, 'association/about.html', context)
	
def detail_statute(request, statute_id):
	statute_detail = get_object_or_404(Statute, pk=statute_id)
	context = get_context()
	context['active'] = statute_detail
	
	return render(request, 'association/document.html', context)
	
def detail_board(request, board_id):
	board_detail = get_object_or_404(BoardMeeting, pk=board_id)
	context = get_context()
	context['active'] = board_detail
	
	return render(request, 'association/document.html', context)
	
def detail_annual(request, annual_id):
	annual_detail = get_object_or_404(Annual, pk=annual_id)
	context = get_context()
	context['active'] = annual_detail
	
	return render(request, 'association/document.html', context)
	
def detail_motion(request, motion_id):
	motion_detail = get_object_or_404(Motion, pk=motion_id)
	context = get_context()
	context['active'] = motion_detail
	
	return render(request, 'association/document.html', context)
	
	
def get_context():
	statutes = Statute.objects.all()
	boards = BoardMeeting.objects.all()
	annuals = Annual.objects.all()
	motions = Motion.objects.all()
	
	context = {'statutes':statutes, 'boards':boards, 'annuals':annuals, 'motions':motions}
	return context
	