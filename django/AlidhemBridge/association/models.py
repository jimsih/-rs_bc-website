from django.db import models

class Statute(models.Model):
	date = models.DateField('date')
	document = models.FileField(upload_to='documents/statutes')
	
	def __str__(self):
		return str(self.date)
		
class BoardMeeting(models.Model):
	date = models.DateField('date')
	document = models.FileField(upload_to='documents/board_meetings')
	
	def __str__(self):
		return str(self.date)
		
class Annual(models.Model):
	date = models.DateField('date')
	document = models.FileField(upload_to='documents/annuals')
	
	def __str__(self):
		return str(self.date)
		
class Motion(models.Model):
	date = models.DateField('date')
	document = models.FileField(upload_to='documents/motions')
	
	def __str__(self):
		return str(self.date)