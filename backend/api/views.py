from rest_framework.authentication import get_authorization_header
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response

from .serializers import PlantSerializer
from .models import Plant
from authentication.models import User
from authentication.authentication import decode_access_token

class PlantsAPIView(APIView):
    def get(self, request):
        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)

            plants = Plant.objects.all()
            serializer = PlantSerializer(plants, many=True)
            
            return Response(serializer.data)
        
        raise AuthenticationFailed('unauthenticated')

class BestMatch(APIView):
    def post(self, request):
        plant_first_name = request.data['scientificName'].split()[:1]
        plant = Plant.objects.filter(scientific_name__contains=plant_first_name[0]).first()
        serializer = PlantSerializer(plant)
        return Response(serializer.data)


class DeletePlant(APIView):
    def post(self, request):
        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)

            plant_id = request.data['plantId']

            Plant.objects.get(id=plant_id).delete()

            return Response('deleted')

        raise AuthenticationFailed('unauthenticated')




    
