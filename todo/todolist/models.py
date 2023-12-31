from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

