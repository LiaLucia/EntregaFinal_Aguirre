import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    
      <Navbar.Brand href="#home">       
        <img
              src="/img/egyptiancat.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
        />{' '}
        Bastet
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#calzado">Calzado</Nav.Link>
          <Nav.Link href="#indumentaria">Indumentaria</Nav.Link>
          <Nav.Link href="#accesorios">Accesorios</Nav.Link>
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