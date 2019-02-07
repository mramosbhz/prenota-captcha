'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const expressPort = process.env.EXPRESS_PORT || 8080;

const mongoConfig = require('./config/mongodb');
const mongoURL = `mongodb://${mongoConfig.address}:${mongoConfig.port}/${mongoConfig.db}`;

mongoose.connect(mongoURL, { useNewUrlParser: true, user: mongoConfig.user, pass: mongoConfig.pass });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('port', expressPort);

app.use(morgan('[:date[web]] [:response-time ms] [:status] :method :url'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./src/routes'));

const server = http.createServer(app);

server.listen(expressPort, () => {
  console.log(`Express running on port: ${expressPort}`);
});