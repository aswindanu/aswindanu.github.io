from django.db.models import CharField
from django.db.models import TextField
from django.utils import timezone
from django.db import models as models

# Create your models here.
class Porto(models.Model):
    judul = models.CharField(max_length=150, default='')
    deskripsi = models.CharField(max_length=255, default='')
    images = models.ImageField(upload_to="Media/img")
    harga = models.IntegerField(default=0)

    def __str__(self):
        return self.judul