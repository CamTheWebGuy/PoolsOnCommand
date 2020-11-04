const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  price: {
    type: String,
    required: true,
    default: '0'
  },
  category: {
    type: String,
    required: true
  },
  items: [
    {
      title: { type: String },
      videoContent: { type: String },
      content: { type: String },
      downloadOne: { type: String },
      downloadOneTitle: { type: String },
      downloadTwo: { type: String },
      downloadTwoTitle: { type: String }
    }
  ]
});

module.exports = Product = mongoose.model('product', ProductSchema);
