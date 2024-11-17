import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Culture_logo from '../assets/Culture_logo.png';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="navbar-font">
      <Container>
        <Navbar.Brand to='/' as={NavLink}>
            <img src={Culture_logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='nav-items-container z-1' id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center w-100 nav-links-container">
            <Nav.Link to='/products/woman' as={NavLink} className="text-uppercase fs-6 text-dark">Mujer</Nav.Link>
            <Nav.Link to='/products/man' as={NavLink} className="text-uppercase fs-6 text-dark">Hombre</Nav.Link>
            <Nav.Link to='/products/girl' as={NavLink} className="text-uppercase fs-6 text-dark">Niña</Nav.Link>
            <Nav.Link to='/products/boy' as={NavLink} className="text-uppercase fs-6 text-dark">Niño</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;