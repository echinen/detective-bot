FROM node:8.9.4
MAINTAINER Eric Chinen
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start