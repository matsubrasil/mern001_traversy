const asyncHandler = require('express-async-handler');

const User = require('./../models/user.model');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({ message: 'Register User' });
});

const loginUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({ message: 'Login User' });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'User data display' });
});

module.exports = {
  getMe,
  registerUser,
  loginUser,
};
