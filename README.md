# [Captcha Solver - API](#captcha-solver-api) 
* * *
## [Dependencies](#dependencies)
Mongo (docker image)
```ssh
$ docker pull mongo
$ docker run --name mongo1 -d mongo:latest
```
Mongo (production - Ubuntu)
```ssh
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ sudo systemctl enable mongod.service
$ sudo systemctl start mongod.service
```
## [Installing](#installing)
```ssh
$ npm install
```

## [Configuring](#configuring)
Edit your ```./config/mongodb.js``` to enter the correct information of your MongoDB
Create an ```.env``` file with the parameter(s) below:
```console
PORT=8080
```
## [Running](#running)
```ssh
$ nodemon
```
or
```ssh
$ node index.js
```

## [Front-end](#front-end)
The front-end runs with back-end (see [Running](#running)).
To access it, just hit the link in your browser: http://[ip-address]:[ENV_PORT]/ (e.g. http://127.0.0.1:8080/)