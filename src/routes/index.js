var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Olá mundo ok')
 /*  res.render('index', { title: 'OK' }); */
});

module.exports = router;
