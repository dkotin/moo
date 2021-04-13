#!/bin/bash
minikube start
eval $(minikube -p minikube docker-env)
docker-compose build
kubectl create -f k8s.yml
kubectl describe -f k8s.yml
minikube service list

