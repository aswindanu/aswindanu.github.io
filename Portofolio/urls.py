from django.urls import path
from .views import base, form

urlpatterns = [
    path ('', base, name='base'),
    path ('add', form, name='form'),
    # path ('barang/<int=home_id>'), home_get, name='home_get')
]