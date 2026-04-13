import Carousel from "react-bootstrap/Carousel";
import imgOne from "../../assets/imagenOne.jpg";
import imgTwo from "../../assets/imagenTwo.jpg";
import imgThree from "../../assets/imagenThree.jpg";
import "./inicio.css";
import { Link } from "react-router-dom";
import SliderProd from "./SliderProd";

const slides = [
  {
    image: imgOne,
    alt: "Equipamiento de rescate costero",
    badge: "Equipamiento confiable",
    title: "Preparados para responder cuando importa.",
    text: "Productos pensados para seguridad, rescate y acción en entornos exigentes.",
  },
  {
    image: imgTwo,
    alt: "Elementos para guardavidas y rescate",
    badge: "Diseño funcional",
    title: "Rescue Store, con identidad más fuerte.",
    text: "Una tienda con enfoque moderno, visual limpio y una experiencia de compra más clara.",
  },
  {
    image: imgThree,
    alt: "Tienda de productos de rescate",
    badge: "Compra simple",
    title: "Todo listo para equiparte mejor.",
    text: "Explora productos, gestiona tu cuenta y avanza al checkout sin fricción.",
  },
];

const Inicio = () => {
  return (
    <main className="homePage">
      <section className="heroSection">
        <Carousel fade controls indicators interval={5000} className="heroCarousel">
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="heroImageWrapper">
                <img className="heroImage" src={slide.image} alt={slide.alt} />
                <div className="heroOverlay" />
              </div>

              <Carousel.Caption className="heroCaption">
                <span className="heroBadge">{slide.badge}</span>
                <h1 className="heroTitle">{slide.title}</h1>
                <p className="heroText">{slide.text}</p>

                <div className="heroActions">
                  <Link to="/productos" className="heroBtnPrimary">
                    Ver productos
                  </Link>
                  <Link to="/login" className="heroBtnSecondary">
                    Mi cuenta
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="trustStrip">
        <div className="trustItem">Compra simple</div>
        <div className="trustDivider" />
        <div className="trustItem">Diseño responsive</div>
        <div className="trustDivider" />
        <div className="trustItem">Experiencia más clara</div>
      </section>

      <section className="sliderSection">
        <SliderProd />
      </section>
    </main>
  );
};

export default Inicio;