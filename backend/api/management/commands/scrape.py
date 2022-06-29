from django.core.management.base import BaseCommand;
from bs4 import BeautifulSoup;
from api.models import Plant
import requests
import re



imageUrl = "http://www.tropicopia.com/house-plant/thumbnails/"
baseURL = "http://www.tropicopia.com/house-plant/detail.np/detail-"
     
class Command(BaseCommand):
    def handle(self, *args, **options):
       for num in range (1,3):
        newNum = str(num)
        if len(newNum) == 1:
            newNum = ("0" + newNum)
            url = baseURL + newNum + ".html" 
            result = requests.get(url)
            doc = BeautifulSoup(result.text, "html.parser")
            info = doc.find_all('p')
            image = doc.find_all('img')[12]
            image = (image['src'].split('/')[2])
            image = imageUrl + image
            name = info[10].text.strip()
            common = info[15].text.strip()
            light = info[34].text.strip()
            light = light.split('(')
            light = light[0]
            water = info[38].text.strip()
            water = water.split('&')
            water = water[0]
            insects = info[40].text.strip()
            disease = info[42].text.strip()
            if common == 'Common name :':
                newCommon = info[16].text.strip()
                newLight = info[35].text.strip()
                newLight = newLight.split('(')
                newLight = light[0]
                newWater = info[39].text.strip()
                newWater = newWater.split('&')
                newWater = newWater[0]
                newInsects = info[41].text.strip()
                newDisease = info[43].text.strip()
                Plant.objects.create(
                    scientific_name = name,
                    common_name = newCommon, 
                    water_use = newWater,
                    light = newLight,
                    insects = newInsects,
                    disease = newDisease
                    image = image
                )
            else:
                    Plant.objects.create(
                    scientific_name = name,
                    common_name = common, 
                    water_use = water,
                    light = light,
                    insects = insects,
                    disease = disease,
                    image = image
                )
            self.stdout.write('job complete')
        else:
            url = baseURL + newNum + ".html" 
            result = requests.get(url)
            doc = BeautifulSoup(result.text, "html.parser")
            info = doc.find_all('p')
            image = doc.find_all('img')[12]
            image = (image['src'].split('/')[2])
            image = imageUrl + image
            name = info[10].text.strip()
            common = info[15].text.strip()
            light = info[34].text.strip()
            light = light.split('(')
            light = light[0]
            water = info[38].text.strip()
            water = water.split('&')
            water = water[0]
            insects = info[40].text.strip()
            disease = info[42].text.strip()
            if common == 'Common name :':
                newCommon = info[16].text.strip()
                newLight = info[35].text.strip()
                newLight = newLight.split('(')
                newLight = light[0]
                newWater = info[39].text.strip()
                newWater = newWater.split('&')
                newWater = newWater[0]
                newInsects = info[41].text.strip()
                newDisease = info[43].text.strip()
                Plant.objects.create(
                    scientific_name = name,
                    common_name = newCommon, 
                    water_use = newWater,
                    light = newLight,
                    insects = newInsects,
                    disease = newDisease,
                    image = image
                )
            else:
                Plant.objects.create(
                    scientific_name = name,
                    common_name = common, 
                    water_use = water,
                    light = light,
                    insects = insects,
                    disease = disease,
                    image = image
                )
            self.stdout.write('job complete')
                



          
