var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/administrador',{ //login.hbs
    layout:'admin/layout', title: 'Administrador',  //layout.hbs
    user: req.session.name
  });
});

module.exports = router;