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
    expires: '2h',
    default: Date.now
  }
});

module.exports = User = mongoose.model('reset', ResetSchema);
