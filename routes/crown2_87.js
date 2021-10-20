var express = require('express');
var router = express.Router();
const crown2Controller_87 = require('../controllers/crown2Controller_87');

/* GET home page. */
router.get('/', crown2Controller_87.getCategories);

module.exports = router;
