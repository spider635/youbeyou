from django.shortcuts import render
from django.http import HttpResponse


# 最简单的视图函数
def hello(request):
    return HttpResponse("Hello, Django!")


# 带模板的视图
def home(request):
    context = {
        "title": "欢迎页面",
        "message": "这是我的第一个Django模板页面!",
        "items": ["苹果", "香蕉", "橙子"],
    }
    return render(request, "welcomeapp/home.html", context)
