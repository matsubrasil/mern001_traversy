const router = require('express').Router();
const {
  getMe,
  registerUser,
  loginUser,
} = require('./../controllers/users.controller');

router.route('/').post(registerUser);
router.route('/me').get(getMe);
router.route('/login').post(loginUser);

module.exports = router;
