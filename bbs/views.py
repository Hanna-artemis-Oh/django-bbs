from django.shortcuts import render
from .models import Board


def b_list(request):
    # 게시글을 모두 가져와서 화면에 출력
    posts = Board.objects.all().order_by('-id')
    context = {'posts': posts}
    return render(request, 'bbs/list.html', context)


def b_create(request):
    pass
