const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');
const User = require('../../models/User');
const { json } = require('express');

// @route    PATCH api/product
// @desc     Update a Product
// @access   Private/Admin
router.patch(
  '/:id',
  [
    auth,
    [
      check('name', 'Product name is required')
        .not()
        .isEmpty(),
      check('price', 'Product price is required')
        .not()
        .isEmpty(),
      check('category', 'Product category is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, image, price, category } = req.body;

    const productFields = {
      name,
      image,
      price,
      category
    };

    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { $set: productFields },
        { new: true, upsert: true }
      );
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/product
// @desc     Create a Product
// @access   Private/Admin
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Product name is required')
        .not()
        .isEmpty(),
      check('price', 'Product price is required')
        .not()
        .isEmpty(),
      check('category', 'Product category is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, image, price, category, items } = req.body;

    const productFields = {
      name,
      image,
      price,
      category,
      items
    };

    try {
      let product = new Product(productFields);
      await product.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/product/:id
// @desc     Get a Product by ID
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    if (!product) {
      return res.status(404).json({ msg: 'No product found' });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/product
// @desc     Create ALL Products
// @access   Private/Admin
router.get('/', auth, async (req, res) => {
  try {
    const products = await Product.find({});

    if (!products) {
      return res.status(404).json({ msg: 'No product found' });
    }

    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/product/:id
// @desc     Delete Product by ID
// @access   Private

module.exports = router;
