const router = require('express').Router();
const {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('./../controllers/goals.controller');

router.route('/').get(getGoals).post(setGoal);

router.route('/:id').get(getOneGoal).put(updateGoal).delete(deleteGoal);

module.exports = router;
