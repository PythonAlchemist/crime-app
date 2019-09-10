
####  crime-app image

docker build -t crime-app-img -f CICD/Dockerfile-App .
docker run -d -p 3000:3000 crime-app-img


##### python analytics

gunicorn -b:13000 --timeout 18000 testAnalytics:api

w/ Docker

docker build -t crime-engine -f CICD/Dockerfile-Analytics .
docker run -d -p 13000:13000 -v ~/Desktop/crimes-in-boston:/data crime-engine

###### GCP registry

docker tag crime-app-img gcr.io/crime-analytics-251813/crime-app-img:crime-app-img
docker push gcr.io/crime-analytics-251813/crime-app-img

docker tag crime-engine gcr.io/crime-analytics-251813/crime-engine:crime-engine
docker push gcr.io/crime-analytics-251813/crime-engine
