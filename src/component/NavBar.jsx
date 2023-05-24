
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


const NavBar =()=> {
  return (
    
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Los Ramones Respuestos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="CartWidGet">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Neumaticos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Iluminacion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Suspencion y Frenos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Soporte Tecnico
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contactos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}
 export default NavBar;   