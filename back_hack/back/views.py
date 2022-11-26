from rest_framework import viewsets
from back_hack.serializers import DaySerializer, UserSerializer
from back_hack.serializers import WeekSerializer
from back.models import TimetableWeek, AuthUser
from back.models import TimetableDay
from back_hack.serializers import WeekFilter

from rest_framework import routers
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.
class DayViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = TimetableDay.objects.all()
    serializer_class = DaySerializer  # Сериализатор для модели
    # filter_backends = (DjangoFilterBackend,)
    # filterset_class = BooksFilter

class WeekViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = TimetableWeek.objects.all()
    serializer_class = WeekSerializer  # Сериализатор для модели
    filter_backends = (DjangoFilterBackend,)
    filterset_class = WeekFilter

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = AuthUser.objects.all()
    serializer_class = UserSerializer  # Сериализатор для модели
    # filter_backends = (DjangoFilterBackend,)
    # filterset_class = BooksFilter
