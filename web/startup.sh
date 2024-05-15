npm run build

VERSION=1
docker build -t home-web:$VERSION .
docker run -d -p 7774:80 home-web:$VERSION

