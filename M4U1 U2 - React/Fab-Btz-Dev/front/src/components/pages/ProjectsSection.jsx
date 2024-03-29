import React from 'react';
import '../../styles/components/pages/ProjectsSection.css'
//import bgImage from '../../styles/images/image_1.jpg';

import {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectItem from '../Projects/ProjectItem';


function ProjectsSection() {

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const cargarProjects = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/projects');
      setProjects(response.data);
      setLoading(false);
    };

    cargarProjects();
  }, []);

  return (
    <div className="container-xxl projects">
      <div className="page-header">
        <div className="row">

          <div className="col-lg-12">
            <h1>Proyectos</h1>
            <p >Cuanto con experiencia en desarrollo de sitios y aplicaciones web en PHP.
              <br></br>Iniciando con React y Node JS. -
            </p>
          </div>

          <h2 className="text-danger">Ve mis Trabajos Realizados</h2>
          <hr></hr><br></br><br></br>
          <div className="col-md-12">
            
            {
              loading ? (
                <p>Cargando...</p>

              ) : (
                projects.map(item => 
                  <ProjectItem 
                    key = {item.id}
                    name = {item.name}
                    description = {item.description}
                    lenguage = {item.lenguage}
                    type = {item.type}
                    image = {item.image}
                    url = {item.url}
                  />)
            )}
            
              {/* <div className='img-container'>
                <img 
                  src={bgImage}
                  className='imagen'
                  alt='Img-Projects'
                />  
              </div>
              <div className="over-text"></div>
              <div className="center">
                <a href="fab-btz/proyectos.html" className="btn btn-outline-danger"> Sitios &amp; Aplicaciones
                </a><br></br><br></br>
                <h4><span className="blockquote" style={{color:'#fff'}}> Diseño Web</span></h4>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;