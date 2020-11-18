const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const stripe = require('stripe')(config.get('stripeSecretkey'));

const Product = require('../../models/Product');

const calculateOrderAmount = async items => {
  let total = '';
  let finalTotal = [];

  let productsList = await Product.find()
    .where('_id')
    .in(items)
    .exec();

  productsList.forEach(e => {
    total = +total + +e.price;
  });

  total = Math.round(total * 100 + Number.EPSILON) / 100;
  total = parseFloat(total).toFixed(2);
  total = total.toString();

  finalTotal = total.split('.');
  finalTotal = finalTotal.join('');
  return finalTotal;
};

// @route    POST api/stripe/charge
// @desc     Charge a card
// @access   Public
router.post('/charge', async (req, res) => {
  const { id, cartItems } = req.body;
  const products = [];

  try {
    cartItems.forEach(e => {
      products.push(e._id);
    });
    const amount = await calculateOrderAmount(products);
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Pools On Command',
      payment_method: id,
      confirm: true
    });
    //console.log(payment);

    return res.status(200).json({ confirm: 'success' });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
