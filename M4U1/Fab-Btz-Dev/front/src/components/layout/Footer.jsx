import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
	return (
		<Navbar expand='lg' bg='primary' variant='dark'>
			<div className='col-md-12 text-center'>
				<p style={{color:'white'}}>
					Copyright &copy; {(new Date().getFullYear())}
					|  Todos los derechos reservados | <i className="icon-heart color-danger" aria-hidden="true"></i> by <a style={{color:'white'}}
						href="#">Me</a>
				</p>
			</div>
		</Navbar>
	);
}

export default Footer;