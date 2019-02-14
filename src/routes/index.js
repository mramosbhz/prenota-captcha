'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static(__dirname + '/../public'));

router.get('/api', (req, res) => res.status(200).send({
  message: 'Prenota Captcha Solving - API',
}));

router.use('/api/captcha', require('./captcha'));

module.exports = router;