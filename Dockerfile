FROM node:21-alpine3.18
COPY . /app
WORKDIR ./app
CMD npm start