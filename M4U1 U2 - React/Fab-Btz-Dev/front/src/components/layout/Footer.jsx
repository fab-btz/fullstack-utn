import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Footer() {
	return (
		<Navbar expand='lg' bg='primary' variant='dark'>
			<div className='col-md-12 text-center'>
				<h5 style={{color:'white'}}>
					<p>
						Copyright &copy; {(new Date().getFullYear())}
						|  Todos los derechos reservados 
						{/* | <i className="icon-heart color-danger" aria-hidden="true"></i> by  <a style={{color:'white'}} href='/about'>Me</a> */}
						{/* <Link className='nav-link' to='/about'>Me</Link> */}
					</p>
				</h5>
			</div>
		</Navbar>
	);
}

export default Footer;