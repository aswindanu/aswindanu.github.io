from django import forms
from .models import Porto

class PortoForm(forms.ModelForm):
    class Meta:
        model = Porto
        fields = '__all__'