import Carousel from 'react-bootstrap/Carousel';
import elementos from '../../assets/elementos.jpg';
import fox402 from '../../assets/fox402.jpg';
import guardavidas from '../../assets/guardavidas.jpg';
import './sliderProd.css';


function SliderProd() {
  return (
    <Carousel fade className='sliderB'>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSliderB"
          src={elementos}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Elementos De Flote</h3>
          <p>Tenemos sunchos y torpedos de gran calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSliderB"
          src={fox402}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Silbatos</h3>
          <p>Gran cantidad de silbatos de alta calidad para realizar las mejores prevenciones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSliderB"
          src={guardavidas}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Binoculares</h3>
          <p>Poseemos en stock los mejores prismaticos del mercado.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderProd;