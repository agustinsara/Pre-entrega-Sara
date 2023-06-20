
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';


const NavBar =()=> {
  return (
    
    <Navbar bg="light" expand="lg" >
      <Container>
     <Navbar.Brand href="/">Los Ramones Respuestos</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/category/neumaticos">Neumaticos</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category/iluminacion">Iluminacion</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category/suspencion-frenos">Suspencion y Frenos</Link></NavDropdown.Item>
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