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
    image: req.body.image,
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
  Captcha.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (error, captchaResult) => {
    if (error) {
      return next(error);
    }
    res.send(captchaResult);
  });
};