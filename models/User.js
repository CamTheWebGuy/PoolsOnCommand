const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  businessName: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User = mongoose.model('user', UserSchema);
