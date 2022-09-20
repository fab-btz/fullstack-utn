import React from 'react';
import '../../styles/components/pages/ProjectsSection.css'
import bgimage from '../../styles/images/image_1.jpg';

function ProjectsSection() {
  return (
    <div className="container-xxl projects">
      <div className="page-header">
        <div className="row">

          <div className="col-lg-12">
            <h1>Proyectos</h1>
            <p className="lead">Cuanto con experiencia en desarrollo de sitios y aplicaciones web en PHP.
              <br></br>Iniciando con React y Node JS. -
            </p>
          </div>

          <h2 className="text-danger text-center p-4">Ve mis Trabajos Realizados</h2>

          <div className="col-md-12 text-center">
              <div className='img-container'>
                <img 
                  src={bgimage}
                  className='image'
                  alt='Image-Projects'
                />  
              </div>
              <div className="over-text"></div>
              <div className="center">
                <a href="fab-btz/proyectos.html" className="btn btn-outline-danger"> Sitios &amp; Aplicaciones
                </a><br></br><br></br>
                <h4><span className="blockquote" style={{color:'#fff'}}> Diseño Web</span></h4>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;