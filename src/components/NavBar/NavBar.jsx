import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    
      

      <NavLink to = '/'>  
      <Navbar.Brand href="#home">       
        <img
              src="/img/egyptiancat.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
        />{' '}
        Bastet
      </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to='/categoria/calzado' className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>Calzado</NavLink>
          <NavLink to='/categoria/indumentaria' className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>Indumentaria</NavLink>
          <NavLink to='/categoria/accesorios' className={({isActive})=> isActive ? 'btn btn-light':'btn btn-dark'}>Accesorios</NavLink>
          <NavDropdown title="Marcas" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#marca/adidas">Adidas</NavDropdown.Item>
            <NavDropdown.Item href="#marca/puma">Puma</NavDropdown.Item>
            <NavDropdown.Item href="#marca/topper">Topper</NavDropdown.Item>
             <NavDropdown.Divider />
            <NavDropdown.Item href="#marca/otras">
              Otras
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#cart">
            <CartWidget/>
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;