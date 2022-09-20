import React from 'react';
import "../../styles/components/pages/AboutSection.css";

function AboutSection() {
    return (
        <div className="container-xxl about">
            <div className="page-header">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="picture">
                            <div className="picture-bg"></div>
                        </div>
                    </div>        

                    <div className="col-lg-6">
                        <div className="about-me">
                        <h1>Sobre Mí</h1>
                        <p className="lead">El éxito no vendrá solo, depende de la constancia que le pongas.</p>
                        <ul className="about-info mt-4 px-md-0 px-2">
                        <li className="d-flex lead">
                            <span className="badge rounded-pill bg-primary">Nombre y Apellido: </span>
                            <span className="badge rounded-pill bg-danger">Victor Fabián Benitez Ocampo</span>
                        </li>
                        <li className="d-flex lead">
                            <span className="badge rounded-pill bg-primary">Nacimiento:</span>
                            <span className="badge rounded-pill bg-danger">12 de Junio, 1987</span>
                        </li>
                        <li className="d-flex lead">
                            <span className="badge rounded-pill bg-primary">Direccion: </span>
                            <span className="badge rounded-pill bg-danger">Corrientes, Argentina</span>
                        </li>
                        <li className="d-flex lead">
                            <span className="badge rounded-pill bg-primary">Código Postal: </span>
                            <span className="badge rounded-pill bg-danger"> 3400</span>
                        </li>
                        <li className="d-flex lead">
                            <span className="badge rounded-pill bg-primary">Email: </span>
                            <span className="badge rounded-pill bg-danger">fabianbenitez25@gmail.com</span>
                        </li>
                        <li className="d-flex lead">
                            <span className="badge rounded-pill bg-primary">Teléfono: </span>
                            <span className="badge rounded-pill bg-danger">+54-3794-905861</span>
                        </li>                       
                        </ul>
                        <p>
                            <span className="badge rounded-pill bg-danger" style={{fontWeight:'700', fontSize:'1.2rem', paddingTop:'8px'}}>+ 20</span>
                            <span style={{marginLeft:'20px', fontWeight:'800', fontSize:'1.2rem'}}>Proyectos realizados</span>
                        </p>
                        <p>
                            <a href="CV-Fabián Benitez.pdf" target='_blank'>
                                <button className="btn btn-primary">Descargar CV</button>
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="card text-white bg-primary mb-6" style={{maxWidth: '100%'}}>
            <div className="card-header"><h1>Sobre Mí</h1></div>
            <div className="card-body">
                <h4 className="card-title"></h4>
                <p className="card-text"><span>Nombre y Apellido: </span> <span>Victor Fabián Benitez Ocampo</span></p>
                <p className="card-text"><span>Nacimiento: </span><span>12 de Junio, 1987</span></p>
                <p className="card-text"><span>Ubicación: </span> <span>Corrientes, Argentina</span></p>
                <p className="card-text"><span>Código Postal: </span> <span>3400</span></p>
                <p className="card-text"><span>Email: </span> <span>fabianbenitez25@gma</span></p>
                <p className="card-text"><span>Teléfono: </span> <span>+54-3794-905861</span></p>
                <p className="card-text"><span></span></p>
            </div> 
            </div>*/}
        
        </div>   
    );
}

export default AboutSection;