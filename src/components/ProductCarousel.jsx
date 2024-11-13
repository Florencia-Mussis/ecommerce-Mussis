import Carousel from 'react-bootstrap/Carousel';

function ProductCarousel({images}) {
  return (
    <Carousel>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;