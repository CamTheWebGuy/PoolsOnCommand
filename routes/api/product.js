const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
const { check, validationResult } = require('express-validator');
const sanitizeHtml = require('sanitize-html');

const Product = require('../../models/Product');
const User = require('../../models/User');
const { json } = require('express');

// @route    PATCH api/product/item/:productId/add
// @desc     Add a item to a product
// @access   Private/Admin
router.patch(
  '/item/:productId/add',
  [
    auth,
    admin,
    [
      check('newItemName', 'Item must have a name')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check('newItemContent', 'Item must have content')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const {
      newItemName,
      newItemDL1,
      newItemDL1Title,
      newItemDL2,
      newItemDL2Title,
      newItemContent,
      newItemVideoContent
    } = req.body;

    const productFields = {
      title: newItemName,
      content: sanitizeHtml(newItemContent),
      videoContent: sanitizeHtml(newItemVideoContent, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          'iframe',
          'img',
          'strike'
        ]),
        allowedAttributes: {
          a: ['href'],
          iframe: ['src']
        }
      }),
      downloadOne: sanitizeHtml(newItemDL1),
      downloadOneTitle: sanitizeHtml(newItemDL1Title),
      downloadTwo: sanitizeHtml(newItemDL2),
      downloadTwoTitle: sanitizeHtml(newItemDL2Title)
    };

    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.productId },
        { $push: { items: productFields } },
        { new: true, upsert: true }
      );

      res.json(product.items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    PATCH api/product/item/:productId/:itemId
// @desc     Update a Product Item by ID
// @access   Private/Admin
router.patch(
  '/item/:productId/:itemId',
  [
    [auth, admin],
    [
      check('title', 'Item must have a title')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check('content', 'Item must have content')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      videoContent,
      content,
      downloadOne,
      downloadOneTitle,
      downloadTwo,
      downloadTwoTitle
    } = req.body;

    const productFields = {
      'items.$.title': title,
      'items.$.videoContent': sanitizeHtml(videoContent, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          'iframe',
          'img',
          'strike'
        ]),
        allowedAttributes: {
          a: ['href'],
          iframe: ['src']
        }
      }),
      'items.$.content': sanitizeHtml(content),
      'items.$.downloadOne': sanitizeHtml(downloadOne),
      'items.$.downloadOneTitle': sanitizeHtml(downloadOneTitle),
      'items.$.downloadTwo': sanitizeHtml(downloadTwo),
      'items.$.downloadTwoTitle': sanitizeHtml(downloadTwoTitle)
    };

    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.productId, 'items._id': req.params.itemId },
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

// @route    PATCH api/product/sold/:id
// @desc     Update a Product
// @access   Private
router.patch('/sold/:id', [auth], async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { numberSold: 1 } },
      { new: true, upsert: true }
    );
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PATCH api/product/:id
// @desc     Update a Product
// @access   Private/Admin
router.patch(
  '/:id',
  [
    [auth, admin],
    [
      check('name', 'Product name is required')
        .not()
        .isEmpty()
        .trim(),
      check('price', 'Product price is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check('category', 'Product category is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check('price', 'Price must be a number')
        .isFloat()
        .trim()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price, category, items } = req.body;

    const productFields = {
      name,
      price,
      category,
      items
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
    [auth, admin],
    [
      check('name', 'Product name is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check('price', 'Product price is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check('category', 'Product category is required')
        .not()
        .isEmpty()
        .trim()
        .escape()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price, category } = req.body;

    const productFields = {
      name,
      price,
      category
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
// @desc     Get ALL Products
// @access   Private/Admin
router.get('/', [auth, admin], async (req, res) => {
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

// @route    DELETE api/product/:productId/:itemId
// @desc     Delete Product Item by ID
// @access   Private/Admin
router.delete('/:productId/:itemId', [auth, admin], async (req, res) => {
  try {
    let product = await Product.updateOne(
      {
        _id: req.params.productId
      },
      { $pull: { items: { _id: req.params.itemId } } }
    );

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/product/:productId
// @desc     Delete Product by ID
// @access   Private/Admin
router.delete('/:productId', [auth, admin], async (req, res) => {
  try {
    await Product.findOneAndDelete({
      _id: req.params.productId
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
