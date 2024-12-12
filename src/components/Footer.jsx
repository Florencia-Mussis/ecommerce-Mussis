import Footer_vector from '../assets/Footer_vector.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container d-flex flex-column flex-lg-row justify-content-between">
                <div className="footer-logo">
                    <img src={Footer_vector} alt="Logo" className="logo img-fluid" />
                </div>
        
                <div className="footer-categories d-flex flex-column justify-content-between">
                    <div className='d-flex gap-5'>
                        <div>
                            <ul className="categories-list list-unstyled d-flex flex-column">
                                <li><NavLink to='/products/woman' as={NavLink} className="text-decoration-none text-uppercase text-dark" href="#hero-section">Mujer</NavLink></li>
                                <li><NavLink to='/products/man' as={NavLink} className="text-decoration-none text-uppercase text-dark" href="#hero-section">Hombre</NavLink></li>
                                <li><NavLink to='/products/girl' as={NavLink} className="text-decoration-none text-uppercase text-dark" href="#hero-section">Niña</NavLink></li>
                                <li><NavLink to='/products/boy' as={NavLink} className="text-decoration-none text-uppercase text-dark" href="#hero-section">Niño</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="categories-list list-unstyled d-flex flex-column">
                            <li><a className="text-decoration-none text-uppercase text-dark" href="#">About</a></li>
                            <li><a className="text-decoration-none text-uppercase text-dark" href="#">Ayuda</a></li>
                            <li><a className="text-decoration-none text-uppercase text-dark" href="#">Faq</a></li>
                            <li><a className="text-decoration-none text-uppercase text-dark" href="#">T&C</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='trademark text-secondary m-0'>® CULTURE 2024</p>
                    </div>
                </div>
            </div>
      </footer>
    )
}

export default Footer