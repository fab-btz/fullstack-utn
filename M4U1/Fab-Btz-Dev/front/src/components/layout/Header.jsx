import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
            <Container className='container-fluid'>
                <Navbar.Brand href='#home'>Fab-Btz-Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#home-section">Inicio</Nav.Link>
                        <Nav.Link href="#about-section">Sobre Mí</Nav.Link>
                        <Nav.Link href="#resume-section">Resumen</Nav.Link>
                        <Nav.Link href="#services-section">Servicos</Nav.Link>
                        <Nav.Link href="#skills-section">Habilidades</Nav.Link>
                        <Nav.Link href="#pojects-section">Proyectos</Nav.Link>
                        <Nav.Link href="#contact-section">Contacto</Nav.Link>
                        {/* <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;