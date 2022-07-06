from django.urls import path
from .views import PlantsAPIView

urlpatterns = [
    path('plants/', PlantsAPIView.as_view()),
    # path('plants/<int:id>', views.plant_detail),
]