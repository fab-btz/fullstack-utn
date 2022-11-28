import React from 'react';
import "../../styles/components/pages/ContactSection.css";

import { useState } from 'react';
import axios from 'axios';


const ContactSection = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <div className="container-xxl contact">
            <div className="page-header">

                <div className="row">
                    <h1>Contáctame</h1>
                    <div className="col-lg-6"><br></br>
                        <form action='/contact' method='post' onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Nombre: </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name='nombre'
                                    value={formData.nombre} onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Email: </label>
                                <div className="col-sm-10">
                                    <input type="mail" className="form-control" name='email' 
                                    value={formData.email} onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Asunto: </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name='asunto'
                                    value={formData.asunto} onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Mensaje: </label>
                                <div className="col-sm-10">
                                    <textarea name="mensaje" cols="30" rows="7" className="form-control"
                                    value={formData.mensaje} onChange={handleChange} required></textarea>
                                </div>
                            </div><br></br>

                            {sending ? <p>Enviando...</p> : null}
                            {msg ? <p>{msg}</p> : null}

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