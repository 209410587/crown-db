var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Kate Cheng',
    id: '209410587',
  });
});

module.exports = router;
