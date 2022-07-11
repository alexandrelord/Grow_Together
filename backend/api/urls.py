from django.urls import path
from .views import UserAPIView

urlpatterns = [
    path('plants/', UserAPIView.as_view()),
    # path('plants/<int:id>', views.plant_detail),
]