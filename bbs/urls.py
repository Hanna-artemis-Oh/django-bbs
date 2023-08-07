from django.urls import path
from . import views

app_name = 'bbs'  # namespace 설정

urlpatterns = [
    path("list/", views.b_list, name="b_list"),
    path("create/", views.b_create, name="b_create"),
]
