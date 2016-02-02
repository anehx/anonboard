from rest_framework import viewsets

from core import serializers, models, filters


class TopicView(viewsets.ModelViewSet):
    queryset         = models.Topic.objects.all()
    serializer_class = serializers.TopicSerializer
    filter_class     = filters.TopicFilter
