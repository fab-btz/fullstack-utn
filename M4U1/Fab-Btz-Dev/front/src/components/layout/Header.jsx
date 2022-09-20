import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
            <Container className='container-fluid'>
                <Navbar.Brand href='/'>Fab-Btz-Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/'>Inicio</Nav.Link>
                        <Nav.Link href='/about'>Sobre Mí</Nav.Link>
                        <Nav.Link href='/resumen'>Resumen</Nav.Link>
                        <Nav.Link href='/skills'>Habilidades</Nav.Link>
                        <Nav.Link href='/pojects'>Proyectos</Nav.Link>
                        <Nav.Link href='/contact'>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;