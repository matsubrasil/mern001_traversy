const router = require('express').Router();
const {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('./../controllers/goals.controller');
const { protect } = require('./../middleware/auth.middleware');

router.route('/').get(protect, getGoals).post(protect, setGoal);

router
  .route('/:id')
  .get(protect, getOneGoal)
  .put(protect, updateGoal)
  .delete(protect, deleteGoal);

module.exports = router;
