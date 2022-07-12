from django.urls import path
from .views import PlantsAPIView, DeletePlant

urlpatterns = [
    path('plants/', PlantsAPIView.as_view()),
    path('plants/delete/', DeletePlant.as_view()),
]