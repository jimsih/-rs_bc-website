from django.shortcuts import render, get_object_or_404

from .models import News

def index(request):
	news = News.objects.order_by('-publish_date')
	context = {'news_list' : news, 'active' : news[0]}
	return render(request, 'news/news.html', context)
	
def detail(request, news_id):
	news_detail = get_object_or_404(News, pk=news_id)
	news = News.objects.order_by('-publish_date')
	context = {'news_list' : news, 'active' : news_detail}
	return render(request, 'news/news.html', context)
	
