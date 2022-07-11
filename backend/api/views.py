from rest_framework.authentication import get_authorization_header
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
from .serializers import PlantSerializer
from .models import Plant
from authentication import authentication


class UserAPIView(APIView):
    def get(self, request):
        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = authentication.decode_access_token(token)

            plants = Plant.objects.all()
            serializer = PlantSerializer(plants, many=True)

            return Response(serializer.data)

        raise AuthenticationFailed('unauthenticated')

# @api_view(['GET'])
# def plant_detail(request, id):
#     try:
#         plant = Plant.objects.get(pk=id)
#     except Plant.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     # if request.method == 'GET':
#     print(plant.id)
#     serializer = PlantSerializer(plant)
#     print(serializer.data['id'])
#     return Response(serializer.data)

    
