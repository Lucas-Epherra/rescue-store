import Carousel from "react-bootstrap/Carousel";
import elementos from "../../assets/elementos.jpg";
import fox402 from "../../assets/fox402.jpg";
import guardavidas from "../../assets/guardavidas.jpg";
import { Link } from "react-router-dom";
import "./SliderProd.css";

const featuredSlides = [
  {
    image: elementos,
    alt: "Elementos de flote",
    eyebrow: "Categoría destacada",
    title: "Elementos de flote",
    text: "Sunchos, torpedos y equipamiento pensado para respuesta rápida.",
    to: "/productos/flotabilidad",
  },
  {
    image: fox402,
    alt: "Silbatos de rescate",
    eyebrow: "Comunicación y señal",
    title: "Silbatos",
    text: "Opciones funcionales para trabajo costero, control y asistencia.",
    to: "/productos/silbatos",
  },
  {
    image: guardavidas,
    alt: "Binoculares de vigilancia",
    eyebrow: "Visión y control",
    title: "Binoculares",
    text: "Mayor alcance visual para vigilancia y seguimiento en playa.",
    to: "/productos/binoculares",
  },
];

function SliderProd() {
  return (
    <section className="featuredSection">
      <div className="featuredContainer">
        <div className="featuredHeader">
          <span className="featuredKicker">Categorías</span>
          <h2 className="featuredTitle">Explora productos destacados</h2>
          <p className="featuredText">
            Una selección pensada para guardavidas, rescate y trabajo en
            entornos exigentes.
          </p>
        </div>

        <Carousel
          fade
          className="sliderB"
          indicators
          controls
          interval={4200}
        >
          {featuredSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="slideMediaWrapper">
                <img className="imgSliderB" src={slide.image} alt={slide.alt} />
                <div className="slideOverlay" />
              </div>

              <Carousel.Caption className="bgTxt">
                <span className="slideEyebrow">{slide.eyebrow}</span>
                <h3 className="slideTitle">{slide.title}</h3>
                <p className="slideText">{slide.text}</p>

                <Link className="sliderBtn" to={slide.to}>
                  Ver categoría
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default SliderProd;