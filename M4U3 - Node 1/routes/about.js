var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.send('En esta seccion se redactara la seccion Sobre Mi');
  res.render('about', { title: 'Sobre Mí' });
});

module.exports = router;