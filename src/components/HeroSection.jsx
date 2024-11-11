import Hero_homePage from '../assets/Hero_homePage.png'
import Hero_homePage_mobile from '../assets/Hero_homePage_mobile.png'


const HeroSection = ({ title, subtitle }) => {
    return (
        <div className="hero-content text-center d-flex align-items-center justify-content-center flex-column">
            <img
                src={Hero_homePage}
                alt="Hero Background"
                className="img-fluid d-none d-md-block" /* Imagen solo para escritorio */
            />
            <img
                src={Hero_homePage_mobile}
                alt="Hero Background Mobile"
                className="img-fluid d-md-none" /* Imagen solo para móviles */
            />
            <div className="text-overlay">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default HeroSection;
