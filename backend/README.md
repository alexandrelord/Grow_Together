# Backend

## Python Virtual Environments

Whenever you're working on a Python project that uses external dependencies, creating a virtual environment is best. [Link](https://realpython.com/python-virtual-environments-a-primer/)

### Create a Python Virtual Environment
```
python3 -m venv venv
```
### Activating the environment (mac/unix)
```
source venv/bin/activate
```
### Installing dependencies
```
python -m pip install <package-name>
```
### Deactivating the environment
```
deactivate
```
<hr>

## Dependencies

```
pip -m install ...
django
djangorestframework
django-cors-headers
python-decouple
psycocopg2-binary
```

#### General Info on Dependencies
- CORS allows interaction of ressources between domains [django-cors-headers](https://pypi.org/project/django-cors-headers/)
(i.e. localhost:3000 and localhost:8000)
- pyscoppg2 is a library to connect Django to PostgreSQL [psycopg2-binary](https://pypi.org/project/psycopg2-binary/)

<hr>

## Create a dotenv file in backend folder
```
DJANGO_SECRET_KEY='<secret-key>'
```

## Building an API with Django Rest Framework

[Django Rest Framework Docs](https://www.django-rest-framework.org/)

Example: 

- create a file in main_app called serializers.py
Describes the process of going from a python object to json

- In views.py
create a function that will:
- Query the DB
- Serialize the instance(s)
- return json

create a path in urls.py that will hit the endpoint(function in views.py)

[Response()](https://www.django-rest-framework.org/api-guide/responses/)

The Response class allows you to return content that can be rendered into multiple content types, depending on the cline request.