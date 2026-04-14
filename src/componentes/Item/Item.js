import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  const { id, name, imagen, marca, modelo, precio, stock } = prod;

  return (
    <article className="prodCard">
      <div className="itemImageWrap">
        <img
          className="imgProd"
          src={imagen}
          alt={`${marca ?? ""} ${modelo ?? name}`.trim()}
        />
      </div>

      <div className="itemInfo">
        <span className="itemBrand">{marca}</span>

        <h4 className="titleCard">{name}</h4>

        <div className="itemMeta">
          <p className="itemPrice">Valor: ${precio}</p>
          <p className={`itemStock ${stock > 0 ? "inStock" : "outStock"}`}>
            {stock > 0 ? `Stock disponible: ${stock}` : "Sin stock"}
          </p>
        </div>

        <Link className="itemButton" to={`/detalle/${id}`}>
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default Item;