from django.urls import path,include
from cryptonite import views

app_name = 'cryptonite'
urlpatterns = [
    path('q1/', views.q1, name='q1'),    
    path('q2/', views.q2, name='q2'),
    path('q3/', views.q3, name='q3'),
    path('q4/', views.q4, name='q4'),
    path('q5/', views.q5, name='q5'),
    path('q6/', views.q6, name='q6'),    
    path('q7/', views.q7, name='q7'),
    path('q8/', views.q8, name='q8'),
    path('q9/', views.q9, name='q9')
]