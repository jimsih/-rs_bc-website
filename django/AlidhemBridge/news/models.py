from django.db import models

class News(models.Model):
	publish_date = models.DateTimeField('date published')
	author = models.CharField(max_length=50)
	image = models.FileField(upload_to='news_images/')
	title = models.CharField(max_length=200)
	legend = models.CharField(max_length=200)
	ingress = models.TextField()
	body = models.TextField()
	
	class Meta:
		verbose_name_plural = "news"
		
	def __str__(self):
		return str(self.publish_date.date()) + " - " + self.title
	
