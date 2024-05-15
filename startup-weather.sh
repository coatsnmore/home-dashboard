#!/bin/sh
# https://github.com/open-meteo/open-meteo/blob/main/docs/getting-started.md
docker run -d --rm -v open-meteo-data:/app/data -p 7773:8080 ghcr.io/open-meteo/open-meteo