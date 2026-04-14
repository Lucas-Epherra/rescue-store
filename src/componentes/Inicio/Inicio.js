import imgOne from "../../assets/imagenOne.jpg";
import "./Inicio.css";
import { Link } from "react-router-dom";
import SliderProd from "./SliderProd";

const Inicio = () => {
  return (
    <main className="homePage">
      <section className="heroSection">
        <div className="heroStatic">
          <div className="heroContent">
            <span className="heroBadge">Equipamiento confiable</span>

            <h1 className="heroTitle">
              Preparados para responder cuando importa.
            </h1>

            <p className="heroText">
              Productos pensados para seguridad, rescate y acción en entornos
              exigentes.
            </p>

            <div className="heroActions">
              <Link to="/productos" className="heroBtnPrimary">
                Ver productos
              </Link>

              <Link to="/productos" className="heroBtnSecondary">
                Explorar categorías
              </Link>
            </div>
          </div>

          <div className="heroMedia">
            <img
              className="heroImage"
              src={imgOne}
              alt="Equipamiento de rescate costero"
            />
            <div className="heroOverlay" />
          </div>
        </div>
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