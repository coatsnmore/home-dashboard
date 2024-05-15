VERSION=1
docker build -t home-web:$VERSION .
docker run --name=home-web -d -p 7774:80 home-web:$VERSION

