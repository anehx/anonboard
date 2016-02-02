from django.db import models


class Topic(models.Model):
    name        = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=255)
