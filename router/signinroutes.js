const express = require('express');
const router = express.Router();

const signinController = require('../controller/signinController');


router.route('/').get(signinController.get).post(signinController.post);


module.exports = router;