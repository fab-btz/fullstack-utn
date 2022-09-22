import React from 'react';
import "../../styles/components/pages/ContactSection.css";

function ContactSection() {
    return (
        <div className="container-xxl contact">
            <div className="page-header">

                <div className="row">
                    <h1>Contáctame</h1>
                    <div className="col-lg-6"><br></br>
                        <form action="mailto:fabianbenitez25@gmail.com">
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Nombre: </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name='nombre' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Email: </label>
                                <div className="col-sm-10">
                                    <input type="mail" className="form-control" name='email' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Asunto: </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name='asunto' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Mensaje: </label>
                                <div className="col-sm-10">
                                    <textarea name="mensaje" id="" cols="30" rows="7" className="form-control"></textarea>
                                </div>
                            </div><br></br>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                <button type="submit" className="btn btn-danger">Enviar</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-picture">
                            <div className="contact-picture-bg"></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ContactSection;