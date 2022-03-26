from django.db import models

# Create your models here.
class Student(models.Model):
    roll = models.CharField(primary_key=True, max_length=9)
    username = models.CharField(max_length=255, default='')
    password = models.CharField(max_length=255, default='')

class Post(models.Model):
    content = models.TextField(max_length = 750)
    written_by = models.ForeignKey(Student, related_name = 'post_writers', on_delete = models.CASCADE)