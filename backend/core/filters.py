import django_filters

from core import models

class TopicFilter(django_filters.FilterSet):
    class Meta:
        model  = models.Topic
        fields = [ 'name' ]
