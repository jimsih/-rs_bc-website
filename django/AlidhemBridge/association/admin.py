from django.contrib import admin

from .models import Statute, BoardMeeting, Annual, Motion

admin.site.register(Statute)
admin.site.register(BoardMeeting)
admin.site.register(Annual)
admin.site.register(Motion)
