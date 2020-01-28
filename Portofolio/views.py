from django.shortcuts import render, redirect
from .models import Porto 
from .forms import PortoForm


def base(request):
    return render(request, 'loop.html', { 'Porto': Porto.objects.all() })

def form(request):
    if request.method == "POST":
        form = PortoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('base')
    else:
        form = PortoForm()
    return render(request, 'form.html',{'form': form })

def home_get(request):
    return render(request, 'get.html',{'Porto': Porto.objects.get(pk=id) })
