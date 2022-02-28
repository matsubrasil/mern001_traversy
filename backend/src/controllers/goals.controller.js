const asyncHandler = require('express-async-handler');

const Goal = require('./../models/goal.model');
const User = require('./../models/user.model');

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

const getOneGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found!!');
  }
  return res.status(200).json(goal);
});

const setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400);
    throw new Error('Please add a text');
  }

  const goal = await Goal.create({ text, user: req.user.id });
  res.status(201).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { text } = req.body;

  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found!!');
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const updatedGoal = await Goal.findByIdAndUpdate(id, { text }, { new: true });

  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const goal = await Goal.findById(id);

  // console.log('goal remove ==> ', goal);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found!!');
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await goal.remove();
  res.status(200).json({ id: goal._id });
});

module.exports = {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
