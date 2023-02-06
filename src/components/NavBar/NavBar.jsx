import {NavLink} from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './NavBar.css'


function NavBar() {

  return (
    


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <NavLink to = '/' className={'logoNav'}>  
        <Navbar.Brand>       
            <img
                  src="/img/egyptiancat.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
            />{' Bastet'}
          </Navbar.Brand>
        </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/categoria/calzado' className={({isActive})=> isActive ? 'btn btn-light ':'btn btn-dark'}>Calzado</NavLink>
              <NavLink to='/categoria/indumentaria' className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>Indumentaria</NavLink>
              <NavLink to='/categoria/accesorios' className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>Accesorios</NavLink>
              
            </Nav>
            <Nav>
                <NavLink to='/cart' bg="dark" variant="dark" className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>
                  < CartWidget />
                </NavLink>
                
              
            </Nav>
          </Navbar.Collapse>
        </Container>
  </Navbar>
  )
}

export default NavBar;