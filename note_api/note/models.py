from django.db import models
# from django.utils import timezone

class Note(models.Model):

    title = models.CharField(default="", max_length=50)
    body  = models.TextField(default="", max_length=500)
    # created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title