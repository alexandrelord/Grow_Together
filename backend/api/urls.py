from django.urls import path

from .views import PlantsAPIView, DeletePlant, BestMatch, Matches, MatchPlants

urlpatterns = [
    path('plants/', PlantsAPIView.as_view()),
    path('bestmatch/', BestMatch.as_view()),
    path('matches/', Matches.as_view()),
    path('matchmaker/', MatchPlants.as_view()),
    path('plants/delete/', DeletePlant.as_view()),
]