var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var captchaDataSchema = new Schema({
  captcha: { type: String, required: true },
  captchafile: { type: String, required: true },
  text: { type: String, required: false },
  status: { type: String, required: true },
  is_correct: { type: Boolean, required: true }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Captcha', captchaDataSchema);