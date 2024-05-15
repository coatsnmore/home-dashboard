#!/bin/sh
# docker run -e NTFY_UPSTREAM_BASE_URL='https://192.168.86.247:8888' -d -p 8888:80 -it binwiederhier/ntfy serve
docker run -d -p 8888:80 -it binwiederhier/ntfy serve