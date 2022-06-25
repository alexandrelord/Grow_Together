from django.urls import path
from . import views

urlpatterns = [
    path('plants/', views.plant_list),
    # path('api/plants/<int:id>', views.plant_detail),
]