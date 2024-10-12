from django.urls import path
from .views import notelist, noteview, createnote

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('notes', notelist),
    path('note/<str:id>', noteview),
    path('create', createnote),
]
