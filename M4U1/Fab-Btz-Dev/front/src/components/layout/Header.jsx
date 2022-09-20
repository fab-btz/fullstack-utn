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
                        {/* ANDA SIN ESTILO
                        <Nav.Link><Link to='/contact'>Prueba</Link></Nav.Link> 
                        <Nav.Link href='/'>Inicio</Nav.Link>
                        <Nav.Link href='/about'>Sobre Mí</Nav.Link>
                        <Nav.Link href='/resumen'>Resumen</Nav.Link>
                        <Nav.Link href='/skills'>Habilidades</Nav.Link>
                        <Nav.Link href='/pojects'>Proyectos</Nav.Link>
                        <Nav.Link href='/contact'>Contacto</Nav.Link>*/}
                        
                        <Link className='nav-link' to='/'>Inicio</Link>
                        <Link className='nav-link' to='/about'>Sobre Mí</Link>
                        <Link className='nav-link' to='/resume'>Resumen</Link>
                        <Link className='nav-link' to='/skills'>Habilidades</Link>
                        <Link className='nav-link' to='/pojects'>Proyectos</Link>
                        <Link className='nav-link' to='/contact'>Contacto</Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;