from rest_framework import serializers
from core.models import Topic


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
