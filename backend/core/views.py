from rest_framework import viewsets

from core import serializers, models


class TopicView(viewsets.ModelViewSet):
    serializer_class = serializers.TopicSerializer
    queryset = models.Topic.objects.all()
