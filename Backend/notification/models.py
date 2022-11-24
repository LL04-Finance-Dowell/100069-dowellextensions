from email import message
from email.policy import default
from pyexpat import model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
import uuid


from django_celery_beat.models import PeriodicTask, CrontabSchedule
import json

# Create your models here.
class Product(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.CharField(max_length=255, null=True)
    username =models.CharField(max_length=255, null=True)
    product_id = models.CharField(max_length=255)
    product_name = models.CharField(max_length=255, null=True)
    title = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    seen = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

class BroadcastNotification(models.Model):
    message = models.TextField()
    broadcast_on = models.DateTimeField()
    sent = models.BooleanField(default=False)

    class Meta:
        ordering = ['-broadcast_on']


@receiver(post_save, sender=BroadcastNotification)
def notification_handler(sender, instance, created, **kwargs):
    # call group_send function directly to send notifications or you can cxreate a dynamic task in celery beat
    if created:
        schedule, created = CrontabSchedule.objects.get_or_created(hour=instance.broadcast_on.hour, minute=instance.broadcast_on.minute, day_of_month = instance.broadcast_on.day, month_of_year = instance.broadcast_on.month)
        task = PeriodicTask.objects.create(crontab=schedule, name="broadcast-notification-"+str(instance.id), task="notification.tasks.broadcast_notification", args=json.dumps(instance.id))

