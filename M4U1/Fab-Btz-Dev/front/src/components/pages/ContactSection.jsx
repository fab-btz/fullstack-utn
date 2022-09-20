import React from 'react';
import "../../styles/components/pages/ContactSection.css";

function ContactSection() {
    return (
        <div className="container-xxl">
            <div className="page-header">

                <div className="row">
                    <h1>Contáctame</h1>
                    <div className="col-lg-6"><br></br>
                        <form action="mailto:fabianbenitez25@gmail.com">
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Nombre: </label>
                                <div className="col-sm-10">
                                    <input type="text" id="disabledInput" className="form-control" name='nombre' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email: </label>
                                <div className="col-sm-10">
                                    <input type="mail" className="form-control" name='email' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Asunto: </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name='asunto' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Mensaje: </label>
                                <div className="col-sm-10">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control"
                                        placeholder="Mensaje"></textarea>
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