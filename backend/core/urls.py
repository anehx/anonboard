from django.conf.urls import url

from core import views

urlpatterns = [
        url(r'^topics/', views.TopicView.as_view({ 'get': 'list', 'post': 'create' }), name='Topic list'),
]
