from django.core.handlers.wsgi import WSGIRequest
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout

from .forms import UserRegisterForm


@login_required
def profile(request: WSGIRequest):
    return render(request, 'user/profile.html')


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)

            next_page = request.GET.get('next')
            if next_page:
                return redirect(next_page)

            return redirect('profile')
    else:
        form = UserRegisterForm()

    context = {
        'form': form,
        'title': 'Register',
    }

    return render(request, 'registration/register.html', context=context)

def logout_view(request):
    logout(request)
    return redirect('index')