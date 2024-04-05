from django.shortcuts import render,redirect
from .models import Todo
from django.contrib.auth.models import User,auth
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
# Create your views here.

def index(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)
        if user != None:
            auth.login(request,user)
            return redirect('home')
    return render(request,'index.html')


def home(request):
    if request.method == 'POST':
        nice = request.POST.get('titles', '')
        block = request.POST.get('content', '')

        if nice and block:
            add = Todo(title=nice, content=block)
            add.save()
    all = Todo.objects.all()
    return render(request,'home.html',dict(all=all))

def logout(request):
    auth.logout(request)
    return redirect('index')

