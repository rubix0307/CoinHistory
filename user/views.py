from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def profile(request: WSGIRequest):
    return render(request, 'user/profile.html')

from django.shortcuts import render, redirect
from .forms import UserRegisterForm
from django.contrib.auth import login

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('profile')
    else:
        form = UserRegisterForm()

    context = {
        'form': form,
        'title': 'Register',
    }

    return render(request, 'registration/login.html', context=context)
