from django.db import models


# table 명: bbs_board
class Board(models.Model):
    # id = models.AutoField(primary_key=True)
    b_title = models.CharField(max_length=30)
    b_author = models.CharField(max_length=20)
    b_content = models.CharField(max_length=200)
    b_date = models.DateTimeField(auto_now=True)
    b_like_count = models.IntegerField(default=0)

    def __str__(self):
        return self.b_title + " - " + self.b_author


class Comment(models.Model):
    c_author = models.CharField(max_length=20)
    c_content = models.CharField(max_length=100)
    # foreign key 설정
    # property명_id 형태로 column 이 만들어짐
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

    def __str__(self):
        return self.c_content + " - " + self.c_author
