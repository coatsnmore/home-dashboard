#!/bin/sh
VERSION=1

sudo docker build -t home-server:$VERSION .
# sudo docker run -d -p 7775:7777 home-server:$VERSION