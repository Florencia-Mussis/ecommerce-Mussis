const HeroSection = ({ title, subtitle, images }) => {
    return (
        <div className="hero-content text-center d-flex align-items-center justify-content-center flex-column">
            <img
                src={images.desktop}
                alt="Hero Background"
                className="img-fluid d-none d-md-block" 
            />
            <img
                src={images.mobile}
                alt="Hero Background Mobile"
                className="img-fluid d-md-none"
            />
            <div className="text-overlay">
                <h1>{title}</h1>
                <p className="all-products">
                    <a href="#all-products">{subtitle}</a>
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
