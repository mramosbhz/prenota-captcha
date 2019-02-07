# Captcha Solver - API
## Dependencies
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
## Installing
```ssh
$ npm install
```

## Configuring
Edit your ```./config/mongodb.js``` to enter the correct information of your MongoDB

## Running
```ssh
$ nodemon
```
or
```ssh
$ node index.js
```

# Todo
Front-end (all)
