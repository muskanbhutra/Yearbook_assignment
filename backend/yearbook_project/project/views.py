from django.shortcuts import render
from rest_framework import viewsets  
from rest_framework.decorators import api_view    
from rest_framework.response import Response
from .models import *    
from . import serializers 
from django.core.mail import send_mail

# Create your views here.
@api_view (['POST'])
def register(request):
    req_data = request.data
    username = req_data['username']
    roll = req_data['roll'].lower()
    email = roll+"@iitb.ac.in"
    password = req_data['password']
    pointer = req_data['pointer']
    print(roll)
    if Student.objects.filter(roll=roll).exists():
        return Response({"status": "User already exists"})
    else:
        if pointer==0:
            import random
            otp=random.randint(100000,999999)
            print("The otp is", otp)
            subject = "OTP request"
            message = 'Hi, your otp is ' + str(otp)
            email_from = 'bhutramuskan29@gmail.com'
            recipient = [email, ]
            send_mail(subject, message, email_from, recipient, fail_silently=True)
            return Response({otp})
        else:
            submitted_otp=req_data['otp_field']
            otp=req_data['otp']
            if int(otp)==int(submitted_otp):
                student=Student.objects.create(roll=roll)
                student.username=username
                student.password=password
                student.save()
                return Response({"status": "Registered, proceed to login!"})
            else:
                return Response({"status": "otp entered is incorrect"})

@api_view (['POST'])
def login(request):
    req_data = request.data
    roll = req_data['roll'].lower()
    password = req_data['password']
    if Student.objects.filter(roll=roll).exists():
        student = Student.objects.filter(roll=roll)
        if password == student[0].password:
            data_serializer = serializers.StudentSerializer(student, many=True)
            return Response(data_serializer.data)
        else:
            return Response({"status": "Incorrect password"})
    else:
        return Response({"status": "User doesn't exist, Create account!"})

@api_view(['GET']) 
def scroll(request):
    data = Post.objects.all()
    data_serializer = serializers.PostSerializer(data, many=True)
    return Response(data_serializer.data)