const Captcha = require('../models/captcha');

module.exports = {};

module.exports.list = (req, res, next) => {
  Captcha.find({}, (error, captchaResult) => {
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
  let newCaptchaRecord = new Captcha({
    captchafile: req.body.captchafile,
    status: 'RECEIVED'
  });

  newCaptchaRecord.save((error) => {
    if (error) {
      return next(error);
    }
    res.send(newCaptchaRecord);
  });
};

module.exports.update = (req, res, next) => {
  Captcha.findByIdAndUpdate(req.params.id, {$set: { captchafile: req.body.captchafile }}, {new: true}, (error, captchaResult) => {
    if (error) {
      return next(error);
    }
    res.send(captchaResult);
  });
};