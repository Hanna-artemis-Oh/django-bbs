from django import forms
from .models import Board


class BoardForm(forms.ModelForm):
    class Meta:
        model = Board
        fields = ['b_title', 'b_author', 'b_content']

        labels = {
            'b_title': '글 제목',
            'b_author': '글 작성자',
            'b_content': '글 내용'
        }

        widgets = {
            'b_title': forms.TextInput(
                attrs={
                    'class': 'form-control w-50 mb-3',
                    'placeholder': '글 제목을 입력하세요',
                }
            ),
            'b_author': forms.TextInput(
                attrs={
                    'class': 'form-control w-25 mb-3',
                    'placeholder': '글 작성자를 입력하세요'
                }
            ),
            'b_content': forms.Textarea(
                attrs={
                    'class': 'form-control w-75 mb-3',
                    'placeholder': '글 내용을 입력하세요'
                }
            )
        }
