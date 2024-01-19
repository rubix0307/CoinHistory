from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def profile(request: WSGIRequest):
    return render(request, 'user/profile.html')
