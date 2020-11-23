const mongoose = require('mongoose');

const ResetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    expires: '7200',
    default: Date.now
  }
});

module.exports = User = mongoose.model('reset', ResetSchema);
