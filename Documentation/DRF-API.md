# Building an API with Django Rest Framework

[Django Rest Framework Docs](https://www.django-rest-framework.org/)

### Example (using function-based views)

- Create a file in the api folder called ```serializers.py```
- Create a function in ```views.py``` that will query the DB, serialize the instances, and return a JSON response
- Create a path in ```urls.py``` that will hit the endpoint(i.e. function in ```views.py```)

#### Serializers - [docs](https://www.django-rest-framework.org/api-guide/serializers/)
- Convert Python objects from different content-types and vice versa.

#### Function-based views - [docs](https://www.django-rest-framework.org/api-guide/views/#function-based-views)
- Provides a set of simple decorators that wrap your function-based views to ensure they receive an instance of Request (rather than the usual Django HttpRequest) and allows them to return a Response (instead of a Django HttpResponse), and allow you to configure how the request is processed.


#### Response() Class [docs](https://www.django-rest-framework.org/api-guide/responses/)

- The Response class allows you to return content that can be rendered into multiple content types, depending on the client request.




