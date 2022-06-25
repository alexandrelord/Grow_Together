# JWT Authentication with Django + React

[Tutorial Link](https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta)

```
pip install djangorestframework-simplejwt
```

Create the Authentication app

```
python manage.py startapp authentication
```

add it to INSTALLED_APPS in settings.py

Create custom user model in authentication/models.py

```
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)
```

CustomUser extends from AbstractUser
- Gives us access to the standard Django User model attributes and functionalities

Add ModelAdmin to authentication/admin.py

```
from django.contrib import admin
from .models import CustomUser
class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser

admin.site.register(CustomUser, CustomUserAdmin)
```

Configure CustomUser as the AUTH_USER_MODEL in settings.py
```
# Custom user model
AUTH_USER_MODEL = "authentication.CustomUser"
```

Run migrations and create superuser

```
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```
