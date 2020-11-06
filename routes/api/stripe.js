const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const stripe = require('stripe')(config.get('stripeSecretkey'));

const Product = require('../../models/Product');

let total = '';
let finalTotal = [];

const calculateOrderAmount = items => {
  //console.log(items);

  if (items.length < 2) {
    total = +items.price;
    console.log('items here');
    console.log(items);
  } else {
    items.forEach(e => {
      console.log('more than 2 items');
      total = +total + +e.price;
    });
  }

  total = Math.round(total * 100 + Number.EPSILON) / 100;
  total = total.toString();
  console.log(total);

  finalTotal = total.split('.');
  //return Math.round(total * 100 + Number.EPSILON) / 100;
  return finalTotal.join('');
};

// @route    POST api/stripe/create-payment-intent
// @desc     Create Payment Intent
// @access   Public
router.post('/create-payment-intent', async (req, res) => {
  const items = req.body;
  console.log('PAYMENT INTENT HAS BEEN HIT');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd'
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = router;
