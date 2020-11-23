const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const { v1: uuidv1 } = require('uuid');

const User = require('../../models/User');
const Reset = require('../../models/Reset');
const { reset } = require('nodemon');

// @route    POST api/users
// @desc     Register User
// @access   Public
router.post(
  '/',
  [
    check('firstName', 'a First Name is required')
      .not()
      .isEmpty()
      .trim()
      .escape(),
    check('lastName', 'a Last Name is Required')
      .not()
      .isEmpty()
      .trim()
      .escape(),
    check('businessName')
      .trim()
      .escape(),
    check('country')
      .trim()
      .escape(),
    check('zip')
      .trim()
      .escape(),
    check('email', 'Please include a valid email')
      .isEmail()
      .normalizeEmail()
      .trim()
      .escape(),
    check(
      'password',
      'Please enter a password with 6 characters or more'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      businessName,
      country,
      state,
      zip,
      email,
      password
    } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        firstName,
        lastName,
        businessName,
        country,
        state,
        zip,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/users/forgot-password
// @desc     Password Reset Request
// @access   Public
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    const token = uuidv1();
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    } else {
      let resetRequest = new Reset({
        email,
        token
      });

      await resetRequest.save();
      res.status(200).json({ msg: 'Reset Request Received' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PATCH api/users/forgot-password/:token
// @desc     Forgot Password Reset
// @access   Public
router.patch('/forgot-password/:token', async (req, res) => {
  try {
    let token = await Reset.find({ token: req.params.token });

    const email = token[0].email;

    if (!token) {
      return res.status(400).json({ msg: 'Not a valid token' });
    }

    const { password } = req.body;

    const updateData = {
      password
    };

    const salt = await bcrypt.genSalt(10);

    updateData.password = await bcrypt.hash(password, salt);

    let user = await User.findOneAndUpdate(
      { email: email },
      { $set: updateData },
      { new: true, upsert: true }
    );
    res.json({ msg: 'user updated' });

    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    } else {
      let resetRequest = new Reset({
        email,
        token
      });

      await resetRequest.save();
      res.status(200).json({ msg: 'Reset Request Received' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/users
// @desc     Delete User
// @access   Private

// @route    GET api/users/exist/:email
// @desc     See if a user exists by Email
// @access   Public
router.get('/exist/:email', async (req, res) => {
  try {
    const user = await User.find({ email: req.params.email }).select(
      '-password -isAdmin -date -name -_id'
    );

    if (!user || user.length === 0) {
      return res.status(204).json({ msg: 'No user found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
