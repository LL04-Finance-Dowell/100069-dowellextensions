from django.db import models

# Create your models here.
class flutterdatabase(models.Model):
    first_name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)