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

router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id;
  await projectsModel.deleteProject(id);
  console.log(id);
  res.redirect('/admin/projects');
});

router.get('/edit/:id', async (req, res, next) => {
  let id = req.params.id;
  let project = await projectsModel.getProjectById(id);
  res.render('./admin/edit', {
    layout: 'admin/layout',
    title: 'Editar',
    project
  });
});

router.post('/edit', async (req, res, next) => {
  try {
    let obj = {
      name: req.body.name,
      lenguage: req.body.lenguage,
      type: req.body.type,
      url: req.body.url,
      description: req.body.description,
      image: req.body.image
    }

    await projectsModel.editProject(obj, req.body.id);
    res.redirect('/admin/projects');

  } catch (error) {
    console.log(error);
    res.render('./admin/edit', {
      layout: 'admin/layout',
      title: 'Editar',
      error: true,
      message: 'No se pudo modificar el Proyecto'
    })
  }
})

module.exports = router;