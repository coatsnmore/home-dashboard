#!/bin/sh
VERSION=1

docker build -t home-server:$VERSION .
docker run -d -p 7775:7777 home-server:$VERSION