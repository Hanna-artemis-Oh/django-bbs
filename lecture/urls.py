"""lecture URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name='index.html'), name='home'),
    path("jquery01/", TemplateView.as_view(template_name='jQuery01.html'), name="jquery01"),
    path("jquery02/", TemplateView.as_view(template_name='jQuery02.html'), name="jquery02"),
    path("jquery03/", TemplateView.as_view(template_name='jQuery03.html'), name="jquery03"),
    path("jquery04/", TemplateView.as_view(template_name='jQuery04.html'), name="jquery04"),
    path("jquery05/", TemplateView.as_view(template_name='jQuery05.html'), name="jquery05"),
    path("jquery06/", TemplateView.as_view(template_name='jQuery06.html'), name="jquery06"),
    path("jquery07/", TemplateView.as_view(template_name='jQuery07.html'), name="jquery07"),
    path("admin/", admin.site.urls),
    path("bbs/", include('bbs.urls')),
]
