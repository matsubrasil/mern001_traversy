const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const asyncHandler = require('express-async-handler');

const User = require('./../models/user.model');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please enter all fields');
  }

  const emailExists = await User.findOne({ email: email });
  if (emailExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(400);
    throw new Error('Credentials invalid');
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error('Credentials invalid');
  }

  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {
  getMe,
  registerUser,
  loginUser,
};
