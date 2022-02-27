const router = require('express').Router();
const {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('./../controllers/goals.controller');

router.get('/', getGoals);

router.get('/:id', getOneGoal);

router.post('/', setGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router;
