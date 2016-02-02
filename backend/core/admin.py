from django.contrib import admin

from core import models

@admin.register(models.Topic)
class TopicAdmin(admin.ModelAdmin):
    pass
