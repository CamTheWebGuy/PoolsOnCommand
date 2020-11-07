const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const stripe = require('stripe')(config.get('stripeSecretkey'));

const Product = require('../../models/Product');

const calculateOrderAmount = items => {
  let total = '';
  let finalTotal = [];

  items.forEach(e => {
    total = +total + +e.price;
  });

  total = Math.round(total * 100 + Number.EPSILON) / 100;
  total = parseFloat(total).toFixed(2);
  total = total.toString();

  finalTotal = total.split('.');
  //return Math.round(total * 100 + Number.EPSILON) / 100;
  return finalTotal.join('');
};

// @route    POST api/stripe/charge
// @desc     Charge a card
// @access   Public
router.post('/charge', async (req, res) => {
  const { id, cartItems } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(cartItems),
      currency: 'USD',
      description: 'Pools On Command',
      payment_method: id,
      confirm: true
    });
    //console.log(payment);

    return res.status(200).json({ confirm: 'success' });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
