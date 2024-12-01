import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Culture_logo from '../assets/Culture_logo.png';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <Navbar expand="lg" className="navbar-font" ref={navbarRef}>
      <Container>
        <Navbar.Brand to='/' as={NavLink}>
            <img src={Culture_logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsNavOpen(!isNavOpen)}/>
        <Navbar.Collapse className='nav-items-container z-1' id="basic-navbar-nav" in={isNavOpen}>
          <Nav className="me-auto justify-content-center w-100 nav-links-container">
            <Nav.Link to='/products/woman' as={NavLink} className="text-uppercase fs-6 text-dark" onClick={handleNavLinkClick}>Mujer</Nav.Link>
            <Nav.Link to='/products/man' as={NavLink} className="text-uppercase fs-6 text-dark" onClick={handleNavLinkClick}>Hombre</Nav.Link>
            <Nav.Link to='/products/girl' as={NavLink} className="text-uppercase fs-6 text-dark" onClick={handleNavLinkClick}>Niña</Nav.Link>
            <Nav.Link to='/products/boy' as={NavLink} className="text-uppercase fs-6 text-dark" onClick={handleNavLinkClick}>Niño</Nav.Link>
          </Nav>
          <Nav.Link to='/cart' as={NavLink} onClick={handleNavLinkClick}> 
            <CartWidget/>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;