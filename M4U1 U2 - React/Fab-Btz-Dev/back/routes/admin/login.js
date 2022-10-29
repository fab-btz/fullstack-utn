var express = require('express');
const { route } = require('..');
var router = express.Router();

var usersModel = require('./../../models/usersModel');

router.get('/', function(req, res, next) {
  res.render('admin/login',{ //login.hbs
    layout:'admin/layout', title: 'Login'  //layout.hbs
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  //res.redirect('/admin/login');
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var user = req.body.user_name;
    var password = req.body.user_pass;

    var data = await usersModel.getUserByUsernameAndPassword(user, password);

    if (data != undefined) {
      
      req.session.id_usuario = data.id;
      req.session.name = data.name;
      
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;