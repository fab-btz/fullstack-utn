var express = require('express');
var router = express.Router();

var projectsModel = require('./../../models/projectsModel');


router.get('/', async function(req, res, next) {
  
  var projects = await projectsModel.getProjects();

  res.render('./admin/projects',{
    layout:'admin/layout', 
    title: 'Administrador de Proyectos',
    user: req.session.name,
    projects
  });
});

router.get('/add', (req, res, next) => {
  res.render('admin/add', {
    layout: 'admin/layout',
    title: 'Agregar Proyecto'
  });
});

router.post('/add', async (req, res, next) => {
  try {
    if (req.body.name != "" 
        && req.body.lenguage != "" 
        && req.body.type != ""
        && req.body.url != "") {
      await projectsModel.insertProject(req.body);
      res.redirect('/admin/projects');      
    } else {
      res.render('./admin/add', {
      layout: 'admin/layout',
      title: 'Agregar Proyecto',
      error: true,
      message: 'Los campos Nombre, Lenguaje, Tipo y URL son requeridos'
      });    
    }
  } catch (error) {
    console.log(error);
    res.render('./admin/add', {
      layout: 'admin/layout',
      title: 'Agregar Proyecto',
      error: true,
      message: 'No se puego agregar el Proyecto'
    });
  }
});

router.get('./delete', (req, res, next) => {
  res.render('admin/add', {
    layout: 'admin/layout',
    title: 'Agregar Proyecto',
    message: 'Elemento eliminado con exito!'
  });
});

module.exports = router;