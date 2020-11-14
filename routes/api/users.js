const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route    POST api/users
// @desc     Register User
// @access   Public
router.post(
  '/',
  [
    check('firstName', 'a First Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
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

    console.log('FIRED REGISTER ON BACKEND');

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
