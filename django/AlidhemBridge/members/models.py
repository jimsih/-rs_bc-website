from django.db import models

# Create your models here.

class Member(models.Model):
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50, blank=True)
	office = models.CharField(max_length=50, blank=True)
	email = models.EmailField(max_length=100, blank=True)
	portrait = models.FileField(upload_to='member_portraits/', null=True, blank=True)

	def __str__(self):
		return self.first_name + " " + self.last_name
