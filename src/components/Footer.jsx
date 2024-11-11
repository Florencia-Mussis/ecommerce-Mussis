import Footer_vector from '../assets/Footer_vector.png'

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
                                <li><a className="text-decoration-none text-uppercase text-dark" href="/category1">Mujer</a></li>
                                <li><a className="text-decoration-none text-uppercase text-dark" href="/category2">Hombre</a></li>
                                <li><a className="text-decoration-none text-uppercase text-dark" href="/category3">Niña</a></li>
                                <li><a className="text-decoration-none text-uppercase text-dark" href="/category4">Niño</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="categories-list list-unstyled d-flex flex-column">
                            <li><a className="text-decoration-none text-uppercase text-dark" href="/category1">About</a></li>
                            <li><a className="text-decoration-none text-uppercase text-dark" href="/category2">Ayuda</a></li>
                            <li><a className="text-decoration-none text-uppercase text-dark" href="/category3">Faq</a></li>
                            <li><a className="text-decoration-none text-uppercase text-dark" href="/category4">T&C</a></li>
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