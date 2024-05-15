npm run build

VERSION=1
sudo docker build -t home-web:$VERSION .
# sudo docker run -d -p 7774:80 home-web:$VERSION

