var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var captchaDataSchema = new Schema({
  captchafile: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Captcha', captchaDataSchema);