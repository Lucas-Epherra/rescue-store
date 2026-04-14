import elementos from "../../assets/elementos.jpg";
import fox402 from "../../assets/fox402.jpg";
import guardavidas from "../../assets/guardavidas.jpg";
import { Link } from "react-router-dom";
import "./SliderProd.css";

const featuredCategories = [
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

        <div className="featuredGrid">
          {featuredCategories.map((category, index) => (
            <article className="featuredCard" key={index}>
              <div className="featuredCardMedia">
                <img
                  className="featuredCardImage"
                  src={category.image}
                  alt={category.alt}
                />
                <div className="featuredCardOverlay" />
              </div>

              <div className="featuredCardBody">
                <span className="featuredCardEyebrow">{category.eyebrow}</span>
                <h3 className="featuredCardTitle">{category.title}</h3>
                <p className="featuredCardText">{category.text}</p>

                <Link className="featuredCardBtn" to={category.to}>
                  Ver categoría
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SliderProd;