const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const stripe = require('stripe')(config.get('stripeSecretkey'));

const Product = require('../../models/Product');

let total = '';

const calculateOrderAmount = items => {
  //console.log(items);

  items.forEach(e => {
    total = +total + +e.price;
  });
  return Math.round(total * 100 + Number.EPSILON) / 100;
};

// @route    POST api/stripe/create-payment-intent
// @desc     Create Payment Intent
// @access   Public
router.post('/create-payment-intent', async (req, res) => {
  const items = req.body;
  console.log('PAYMENT INTENT HAS BEEN HIT');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1400,
    currency: 'usd'
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = router;
