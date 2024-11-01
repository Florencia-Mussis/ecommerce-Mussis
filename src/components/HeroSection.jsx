const HeroSection = ({backgroundImage, title, subtitle}) => {
    return (
        <div className="Hero-content" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default HeroSection