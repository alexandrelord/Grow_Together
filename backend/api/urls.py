from django.urls import path
from . import views

urlpatterns = [
    path('plants/', views.plant_list),
    # path('plants/<int:id>', views.plant_detail),
]