from django.shortcuts import render
from .models import Board
from .forms import BoardForm


def b_list(request):
    # 게시글을 모두 가져와서 화면에 출력
    posts = Board.objects.all().order_by('-id')
    context = {'posts': posts}
    return render(request, 'bbs/list.html', context)


def b_create(request):
    if request.method == 'POST':
        # post 방식 호출: 데이터베이스에 저장
        pass
    else:
        # get 방식 호출: 사용자 입력 양식 화면 출력
        board_form = BoardForm()
    return render(request, 'bbs/create.html', {'board_form': board_form})
