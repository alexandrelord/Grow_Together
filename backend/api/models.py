from django.db import models

class Plant(models.Model):
    scientific_name = models.CharField(max_length=100)
    common_name = models.CharField(max_length=100)
    water_use = models.CharField(max_length=50)
    light = models.CharField(max_length= 50) 
    maintenance = models.CharField(max_length=50)
    image = models.CharField(max_length=200, blank=True, default=None)

    def __str__(self):
        return self.scientific_name

# class UserPlant(models.Model):
#    user= models.ForeignKey(User, on_delete=models.CASCADE, default= 1)
#    user_plant = models.ForeignKey(Plant, related_name="user_plant", on_delete=models.CASCADE, blank=True, default=None)
#    matched_plant = models.ForeignKey(Plant, related_name="matched_plant", on_delete=models.CASCADE,  blank=True, default=None)
#    plant_image = models.CharField(max_length=200, blank=True, default=None)

#    def __str__(self):
#        return self.plant_image