const express = require('express');
const router = express.Router();
const signupController = require('../controller/signupController');



router.route('/').get(signupController.getsignUp).post(signupController.postsignUp);

module.exports = router;