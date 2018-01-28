from django.db import models

class Event(models.Model):
	date = models.DateTimeField()
	title = models.CharField(max_length=200)
	description = models.TextField()
		
	def __str__(self):
		return str(self.date.date()) + " - " + self.title
