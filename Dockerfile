FROM node:22-alpine3.18
COPY . /app
WORKDIR ./app
CMD npm install
CMD npm start