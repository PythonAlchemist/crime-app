
####  crime-app image

docker build -t crime-app-img -f CICD/Dockerfile-App .
docker run -d -p 3000:3000 -p 12059:12059 -p 13000:13000 crime-app-img


##### python analytics

gunicorn -b:13000 --timeout 18000 testAnalytics:api

w/ Docker

docker build -t crime-engine -f CICD/Dockerfile-Analytics .
docker run -d -p 13000:13000 -v ~/Desktop/crimes-in-boston:/data crime-engine
