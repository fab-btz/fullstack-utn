var express = require('express');
var router = express.Router();
var projectsModel = require('./../models/projectsModel');
//para trabajar con imagenes
var util = require('util');
var cloudinary = require('cloudinary').v2;

//const uploader = util.promisify(cloudinary.uploader.upload);

//const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/projects', async function(req, res, next) {
  var projects = await projectsModel.getProjects();
  
  //solo para imagenes sino sin el map
  projects = projects.map(projects => {
    if (projects.image_id) {
      const image = cloudinary.url(projects.image_id,{
        width: 300,
        height: 500,
        crop: 'fill' //pad
      });
      return {
        ...projects,
        image
      }
    } else {
      return {
        ...projects,
        image: ''
      }
    }
  });

  res.json(projects);
});

module.exports = router;