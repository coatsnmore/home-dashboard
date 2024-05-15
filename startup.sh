#!/bin/sh
VERSION=1

docker build -t home-server:$VERSION .
docker run -d --name home-server -p 7775:7777 home-server:$VERSION