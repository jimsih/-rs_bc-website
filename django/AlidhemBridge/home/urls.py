from django.conf.urls import url

from . import views

app_name = 'home'
urlpatterns = [
    url(r'^$', views.index, name='index'),
		url(r'^start/$', views.index, name='start'),
		url(r'^faq/$', views.faq, name='faq'),
]