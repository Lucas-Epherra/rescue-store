import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../../assets/imagenOne.jpg';
import imgTwo from '../../assets/imagenTwo.jpg';
import imgThree from '../../assets/imagenThree.jpg';
import './inicio.css';
import { Link } from 'react-router-dom';
import SliderProd from './SliderProd';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


const Inicio = () => {

const contexto = useContext(CartContext)
console.log(contexto)

  return (

    <div className='divMain'>
      <Carousel fade variant="dark">

        <Carousel.Item>
          <img
            className="d-block w-100 imgCarousel"
            src={imgOne}
            alt="Imagen Uno"
          />
          <Carousel.Caption className='textPosition'>
            <h3 className="carouselText">Bienvenido A Rescue Store</h3>
            <Link to="/productos"><p className="btn btn-warning">Conoce Nuestros Productos</p></Link>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 imgCarousel"
            src={imgTwo}
            alt="Imagen Dos "
          />

          <Carousel.Caption className='textPosition'>
            <h3 className="carouselText">Bienvenido A Rescue Store</h3>
            <Link to="/productos"><p className="btn btn-warning">Conoce Nuestros Productos</p></Link>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <img
            className="d-block w-100 imgCarousel"
            src={imgThree}
            alt="Imagen Tres"
          />

          <Carousel.Caption className='textPosition'>
            <h3 className="carouselText">Bienvenido A Rescue Store</h3>
            <Link to="/productos"><p className="btn btn-warning">Conoce Nuestros Productos</p></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className='stars'>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</p>
      <SliderProd/>
    </div>

  );
}

export default Inicio;