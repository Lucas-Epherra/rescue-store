import Carousel from 'react-bootstrap/Carousel';
import elementos from '../../assets/elementos.jpg';
import fox402 from '../../assets/fox402.jpg';
import guardavidas from '../../assets/guardavidas.jpg';
import { Link } from 'react-router-dom';
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
        <Carousel.Caption className="bg-txt">
          <h3>Elementos De Flote</h3>
          <p>Tenemos sunchos y torpedos.</p>
          <Link className='btn btn-secondary ' to={"/productos/flotabilidad"}>Ver Mas</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSliderB"
          src={fox402}
          alt="Second slide"
        />

        <Carousel.Caption className="bg-txt">
          <h3>Silbatos</h3>
          <p>Gran cantidad de silbatos.</p>
          <Link className='btn btn-secondary ' to={"/productos/silbatos"}>Ver Mas</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSliderB"
          src={guardavidas}
          alt="Third slide"
        />

        <Carousel.Caption className="bg-txt">
          <h3>Binoculares</h3>
          <p>Binoculares de calidad.</p>
          <Link className='btn btn-secondary ' to={"/productos/binoculares"}>Ver Mas</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderProd;