const Captcha = require('../models/captcha');
const mongoose = require('mongoose');

module.exports = {};

module.exports.list = (req, res, next) => {
  let queryParams = {};
  
  if (req.query.status) {
    queryParams.status = req.query.status;
  }

  Captcha.find(queryParams, (error, captchaResult) => {
    if (error) {
      return next(error);
    }
    res.send(captchaResult);
  });
};

module.exports.retrieve = (req, res, next) => {
  Captcha.findById(req.params.id, (error, captchaResult) => {
    if (error) {
      return next(error);
    }
    res.send(captchaResult);
  });
};

module.exports.create = (req, res, next) => {
  let newIdToInsert = mongoose.Types.ObjectId();

  let newCaptchaRecord = new Captcha({
    _id: newIdToInsert,
    captcha: newIdToInsert,
    captchafile: req.body.captchafile,
    text: '',
    status: 'PENDING',
    is_correct: true
  });

  newCaptchaRecord.save((error) => {
    if (error) {
      return next(error);
    }
    res.send(newCaptchaRecord);
  });
};

module.exports.update = (req, res, next) => {
  Captcha.findByIdAndUpdate(req.params.id, {
    $set: { 
      status: req.body.status, 
      text: req.body.text, 
      is_correct: req.body.is_correct 
    }
  }, {
    new: true
  }, (error, captchaResult) => {
    if (error) {
      return next(error);
    }
    res.send(captchaResult);
  });
};