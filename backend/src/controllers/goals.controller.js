const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Api Goals' });
});

const getOneGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get Goal: ${id}` });
});

const setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400);
    throw new Error('Please add a text');
  }
  res.status(201).json({ message: `POST goals: ${text}` });
});

const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Update Goals: ${id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Delete Goals: ${id}` });
});

module.exports = {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
