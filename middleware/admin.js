const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

module.exports = async function(req, res, next) {
  const user = await User.findById(req.user.id);

  try {
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    if (user.isAdmin) {
      next();
    } else {
      return res.status(401).json({ msg: 'Not authorized as admin' });
    }
  } catch (err) {
    return res.status(400).json({ msg: 'Server Error' });
  }
};
