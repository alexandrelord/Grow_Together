from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import HelloWorldView, CustomUserCreate

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # dummy protected route (delete after tests)
    path('hello/', HelloWorldView.as_view(), name='hello_world')
]