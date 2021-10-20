var express = require('express');
var router = express.Router();
const apiCrown2Controller_87 = require('../controllers/apiCrown2Controller_87');

/* GET home page. */
router.get('/category_87', apiCrown2Controller_87.getCategories);

module.exports = router;
