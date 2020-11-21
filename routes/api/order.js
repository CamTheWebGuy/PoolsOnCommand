const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');
const User = require('../../models/User');
const Order = require('../../models/Order');

// @route    POST api/order
// @desc     Create an Order
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('orderItems', 'Order must have an item')
        .not()
        .isEmpty(),
      check('paymentMethod', 'Must specify a payment method')
        .not()
        .isEmpty(),
      check('totalPrice', 'Order must have a total price')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { orderItems, paymentMethod, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ msg: 'No order items' });
    } else {
      try {
        const order = new Order({
          orderItems,
          user: req.user.id,
          paymentMethod,
          totalPrice
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  }
);

// @route    POST api/order/:id/pay
// @desc     Mark an order as paid
// @access   Private
router.put('/:id/pay', auth, async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({ msg: 'No order found' });
  } else {
    try {
      (order.isPaid = true),
        (order.paidAt = Date.now()),
        (order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.payer.email_address
        });

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
});

// @route    GET api/order/myorders
// @desc     Get logged in users orders
// @access   Private
router.get('/myorders', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id });

  if (!orders || orders.length === 0) {
    return res.status(404).json({ msg: 'No orders found' });
  }

  res.json(orders);
});

// @route    GET api/order
// @desc     Get all orders
// @access   Private/Admin
router.get('/', [auth, admin], async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');

  try {
    if (!orders || orders.length === 0) {
      return res.status(404).json({ msg: 'No orders found' });
    }
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/order/myorders/:id
// @desc     Get my order by id
// @access   Private
router.get('/myorders/:id', [auth], async (req, res) => {
  try {
    const order = await Order.find({ user: req.user.id, _id: req.params.id });

    if (!order || order.length < 1) {
      return res.status(404).json({ msg: 'No order found' });
    }

    res.json(order);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Order not found' });
    }
    res.status(500).send('Server Error');
    console.log(err);
  }
});

module.exports = router;
