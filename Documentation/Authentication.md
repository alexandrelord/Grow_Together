# JSON Web Token (JWT)

A _JSON Web Token_ is a single encoded string that plays the role of a "token".

The key points about a JWT are:

- The token can contain whatever custom data (called _claims_) we want to put in it.
- The token is cryptographically _signed_ by the server when it is created so that if the token is changed in any way, it is considered invalid.
- The token is _encoded_, but **not encrypted**.  It is encoded using a standard known as _base64url encoding_ so that it can be easily serialized across the internet or even be included in a URL's _querystring_. It's easy to look at **encoded** data and think that its content cannot be read - this is not the case.

There is a website dedicated to JWTs that explains in detail their format as well as has the ability to create them:  [https://jwt.io/](https://jwt.io/)
<hr>

# Flow of Token-Based Authentication

<img src="https://i.imgur.com/3quZxs4.png" style="background-color: white">

The diagram above shows that the client app:

1. Attempts to log in a user by sending an HTTP POST request along with the user's credentials.
2. The server will generate a JWT and send it back to the client if the credentials check out. The response could be a JSON, or in a header (usually named **Token**).
3. Not shown on the diagram, but important is that the token needs to be persisted somewhere on the client. In a web app, the token is typically persisted in `localStorage`.
4. The reason a client needs to persist a token is that now, whenever the client makes a request, it can send along the token in the HTTP request, either as a query string, in the request's body, or, as a best practice, in a header named `Authorization`.
5. The server will validate the token and respond to the request.
<hr>

# JWT Authentication with Django + React

### Tutorial - [link](https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta)
### Django REST framework Simple JWT - [docs](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

### Customizing authentication in Django - [link](https://docs.djangoproject.com/en/4.0/topics/auth/customizing/)

## Part 1: Django Backend
<hr>

### 1) Setting up a Custom User in Django
<br>

- `Install the dependencies within your environment`

```
pip install django djangorestframework djangorestframework-simplejwt
```

- `Create the authentication app`

```
python manage.py startapp authentication
```

- `Add it to INSTALLED_APPS in settings.py`


- `Create custom user model in authentication/models.py`

```
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    pass
```

CustomUser extends from AbstractUser and gives us access to the standard Django User model attributes and functionalities

If you’re starting a new project, it’s highly recommended to set up a custom user model, even if the default User model is sufficient for you. This model behaves identically to the default user model, but you’ll be able to customize it in the future if the need arises.

- `Register the model in authentication/admin.py`

```
from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser

admin.site.register(CustomUser, CustomUserAdmin)
```

- `Configure CustomUser as the AUTH_USER_MODEL in settings.py`
```
# Custom user model
AUTH_USER_MODEL = "authentication.CustomUser"
```

- `Run migrations and create superuser`

```
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

### 2) DRF Serializers

#### 2-A) Configure DRF and DRF Simple JWT

- `Add rest-framework to intalled apps and the rest-framework configuration dictionary`

```
from datetime import timedelta # needed for simple-jwt

INSTALLED_APPS = [
    ... 
    'rest_framework'
]
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=14),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': False,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUTH_HEADER_TYPES': ('JWT',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
}

```

### 2-B) Authenticating and getting Refresh and Access tokens


`Add urls to backend/urls.py`

```
urlpatterns = [
    ...
    path('authentication/', include('authentication.urls'))
]
```

`Add urls to authentication/urls.py and use the twin views supplied by DRF Simple JWT to obtain token pairs and refresh tokens.`

```
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
```

`Test token authentication`

```
# Using the terminal or postman
curl --header "Content-Type: application/json" -X POST http://127.0.0.1:8000/authentication/token/obtain/ --data '{"username":"admin","password":"password"}'
```

### 2-E) Registering a User




Include encryption using bcypt [GA-SEI-50](https://git.generalassemb.ly/alelord/sei-50/blob/master/w11/d4/sei-cafe-9-jwt-auth/auth.md#step-4-storing-encrypted-passwords)


<hr>

## Part 1: React Frontend