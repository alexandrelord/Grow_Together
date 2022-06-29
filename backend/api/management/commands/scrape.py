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
            water = info[38].text.strip()
            insects = info[40].text.strip()
            disease = info[42].text.strip()
            if common == 'Common name :':
                newCommon = info[16].text.strip()
                newLight = info[35].text.strip()
                newWater = info[39].text.strip()
                newInsects = info[41].text.strip()
                newDisease = info[43].text.strip()
                Plant.objects.create(
                    scientific_name = name,
                    common_name = newCommon, 
                    water_use = newWater,
                    light = newLight,
                    maintenance = 'N/A',
                    image = image
                )
            else:
                    Plant.objects.create(
                    scientific_name = name,
                    common_name = common, 
                    water_use = water,
                    light = light,
                    maintenance = 'N/A',
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
            water = info[38].text.strip()
            insects = info[40].text.strip()
            disease = info[42].text.strip()
            if common == 'Common name :':
                newCommon = info[16].text.strip()
                newLight = info[35].text.strip()
                newWater = info[39].text.strip()
                newInsects = info[41].text.strip()
                newDisease = info[43].text.strip()
                Plant.objects.create(
                    scientific_name = name,
                    common_name = newCommon, 
                    water_use = newWater,
                    light = newLight,
                    maintenance = 'N/A',
                    image = image
                )
            else:
                Plant.objects.create(
                    scientific_name = name,
                    common_name = common, 
                    water_use = water,
                    light = light,
                    maintenance = 'N/A',
                    image = image
                )
            self.stdout.write('job complete')
                



          
