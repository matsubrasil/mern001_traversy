const router = require('express').Router();
const {
  getMe,
  registerUser,
  loginUser,
} = require('./../controllers/users.controller');

const { protect } = require('./../middleware/auth.middleware');

router.route('/').post(registerUser);
router.route('/me').get(protect, getMe);
router.route('/login').post(loginUser);

module.exports = router;
