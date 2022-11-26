from back.models import TimetableDay, TimetableWeek
from rest_framework import serializers
from django_filters import rest_framework as filters

class DaySerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = TimetableDay
        # Поля, которые мы сериализуем
        fields = ["id", "number_1", "number_2", "number_3", "number_4", "number_5", "number_6", "number_7"]


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = TimetableWeek
        # Поля, которые мы сериализуем
        fields = ["id", "kafedra", "kurs", "group", "pn", "vt", "sr", "ct", "pt", "sb", "vs"]

class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass

class WeekFilter(filters.FilterSet):
     kaf = CharFilterInFilter(field_name='kafedra', lookup_expr='in')
     kurs = CharFilterInFilter(field_name='kurs', lookup_expr='in')
     group = CharFilterInFilter(field_name='group', lookup_expr='in')
     class Meta:
         model = TimetableWeek
         fields = ['kafedra', 'kurs', 'group']


