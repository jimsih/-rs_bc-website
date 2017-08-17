from django.conf.urls import url

from . import views

app_name = 'association'
urlpatterns = [
    url(r'^$', views.index, name='index'),
		url(r'^about$', views.index, name='about'),
		url(r'^statutes/(?P<statute_id>[0-9]+)/$', views.detail_statute, name='detail_statute'),
		url(r'^boards/(?P<board_id>[0-9]+)/$', views.detail_board, name='detail_board'),
		url(r'^annuals/(?P<annual_id>[0-9]+)/$', views.detail_annual, name='detail_annual'),
		url(r'^motions/(?P<motion_id>[0-9]+)/$', views.detail_motion, name='detail_motion'),
]
