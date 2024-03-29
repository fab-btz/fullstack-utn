import React from 'react';
import Typical from 'react-typical';
import "../../styles/components/pages/HomeSection.css";
// import { Container, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function HomeSection() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href='https://www.facebook.com/fabian.benitez.129/'>
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href='https://google.com'>
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="https://www.instagram.com/fabian.benitez.129/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCbQj5Csl6xxCNXPJfca1RDg">
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href="https://twitter.com/FabianBenitez87">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hola, soy{" "}
                            <span className="highlighted-text">Fabián Benitez</span>
                        </span>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            <span className="highlighted-text">Desarrollador Web</span>
                            {" "}Argentino
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Analista en Sistemas",
                                        1000,
                                        "Programador",
                                        1000,
                                        "Full Stack Dev",
                                        1000,
                                        "HTML - CSS",
                                        1000,
                                        "PHP - MySQL",
                                        1000,
                                        "React JS - Node JS",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Habilidad para crear aplicaciones Front-end y Back-end.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        {/* <a href='/contact'>
                            <button className="btn primary-btn"> Contratame </button>
                        </a> */}
                        
                        <Link className='btn primary-btn' to='/contact'>Contratame</Link>
                        
                        <a href="CV-Fabián Benitez.pdf" target='_blank'> 
                        {/*download="CV-Fabian Benitez.pdf"*/}
                            <button className="btn highlighted-btn">Descargar CV</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;