const express = require('express');
const router = express.Router();
const aboutController = require('../controller/aboutController');



router.route('/').get(aboutController);

module.exports = router;