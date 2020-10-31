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
    type: Number,
    required: true,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  items: [
    {
      title: { type: String },
      content: { type: String },
      downloads: [
        {
          title: { type: String },
          link: { type: String }
        }
      ]
    }
  ]
});

module.exports = Product = mongoose.model('product', ProductSchema);
