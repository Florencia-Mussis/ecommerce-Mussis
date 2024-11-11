import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Culture_logo from '../assets/Culture_logo.png';

function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="navbar-font">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Culture_logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='nav-items-container z-1' id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center w-100 nav-links-container">
            <Nav.Link href="#home" className="text-uppercase fs-6 text-dark">Mujer</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase fs-6 text-dark">Hombre</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase fs-6 text-dark">Niña</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase fs-6 text-dark">Niño</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;