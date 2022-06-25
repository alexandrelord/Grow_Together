# Building an API with Django Rest Framework

[Django Rest Framework Docs](https://www.django-rest-framework.org/)

### Example (using function-based views)

- Create a file in the api folder called ```serializers.py```
- Create a function in ```views.py``` that will query the DB, serialize the instances, and return a JSON response
- Create a path in ```urls.py``` that will hit the endpoint(i.e. function in ```views.py```)

#### Serializers - [docs](https://www.django-rest-framework.org/api-guide/serializers/)
- Convert Python objects from different content-types and vice versa.

### Function-based views - [docs](https://www.django-rest-framework.org/api-guide/views/#function-based-views)
- Provides a set of simple decorators that wrap your function-based views to ensure they receive an instance of Request (rather than the usual Django HttpRequest) and allows them to return a Response (instead of a Django HttpResponse), and allow you to configure how the request is processed.

Example
- Create a function that will Query the DB
- Serialize the instance(s)
- return JSON

```
@api_view(['GET'])
def plant_list(request):
    plants = Plant.objects.all()
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)
```


[Response()](https://www.django-rest-framework.org/api-guide/responses/)

The Response class allows you to return content that can be rendered into multiple content types, depending on the client request.




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
