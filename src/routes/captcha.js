'use strict';

const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

//get list
router.get('/', controllers.captcha.list);

//get id
router.get('/:id', controllers.captcha.retrieve);

//create
router.post('/', controllers.captcha.create);

//update
router.put('/:id', controllers.captcha.update);

module.exports = router;