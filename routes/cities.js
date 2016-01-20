var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

///////////////// CITIES GET ROUTE //////////////////////
router.get('/cities', function (req, res, next) {
  res.render('cities', {});
});

module.exports = router;
