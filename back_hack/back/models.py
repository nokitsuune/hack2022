from django.db import models

# Create your models here.
class TimetableDay(models.Model):
    number_1 = models.CharField(db_column='1', max_length=255, blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_2 = models.CharField(db_column='2', max_length=255, blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_3 = models.CharField(db_column='3', max_length=255, blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_4 = models.CharField(db_column='4', max_length=255, blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_5 = models.CharField(db_column='5', max_length=255, blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_6 = models.CharField(db_column='6', max_length=255, blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_7 = models.CharField(db_column='7', max_length=255, blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.

    class Meta:
        managed = False
        db_table = 'timetable_day'


class TimetableWeek(models.Model):
    kafedra = models.CharField(max_length=255)
    kurs = models.CharField(max_length=255)
    group = models.CharField(max_length=255)
    pn = models.ForeignKey(TimetableDay, models.DO_NOTHING, db_column='pn', related_name='pndlnk')
    vt = models.ForeignKey(TimetableDay, models.DO_NOTHING, db_column='vt', related_name='vtrnk')
    sr = models.ForeignKey(TimetableDay, models.DO_NOTHING, db_column='sr', related_name='sra')
    ct = models.ForeignKey(TimetableDay, models.DO_NOTHING, db_column='ct', related_name='ctg')
    pt = models.ForeignKey(TimetableDay, models.DO_NOTHING, db_column='pt', related_name='ptntsa')
    sb = models.ForeignKey(TimetableDay, models.DO_NOTHING, db_column='sb', related_name='sbta')
    vs = models.ForeignKey(TimetableDay, models.DO_NOTHING, db_column='vs', related_name='vskr')

    class Meta:
        managed = False
        db_table = 'timetable_week'
