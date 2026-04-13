import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({
  id,
  name,
  marca,
  modelo,
  categoria,
  imagen,
  precio,
  descripcion,
  stock,
}) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    const item = {
      id,
      name,
      marca,
      modelo,
      categoria,
      imagen,
      precio,
      descripcion,
      stock,
      cantidad,
    };

    agregarAlCarrito(item);
  };

  const precioFormateado = new Intl.NumberFormat("es-AR").format(precio);

  return (
    <section className="detailSection container">
      <article className="detailCard">
        <div className="detailMedia">
          <div className="detailImageBox">
            <img className="imgDetail" src={imagen} alt={name} />
          </div>
        </div>

        <div className="detailInfo">
          <span className="detailCategory">{categoria}</span>
          <h1 className="detailTitle">{name}</h1>

          <p className="detailMeta">
            <span>
              <strong>Marca:</strong> {marca}
            </span>
            <span>
              <strong>Modelo:</strong> {modelo}
            </span>
          </p>

          <p className="detailDescription">{descripcion}</p>

          <div className="detailPurchaseBox">
            <div className="priceBlock">
              <span className="priceLabel">Precio</span>
              <p className="detailPrice">${precioFormateado}</p>
            </div>

            <span className={stock > 0 ? "stockBadgeDetail" : "stockBadgeDetail noStock"}>
              {stock > 0 ? `Stock disponible: ${stock}` : "Sin stock"}
            </span>
          </div>

          <div className="detailActions">
            {!isInCart(id) ? (
              <div className="countBox">
                <ItemCount
                  max={stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  onAdd={handleAgregar}
                />
              </div>
            ) : (
              <Link to="/cart" className="goCartBtn">
                Ver en el carrito
              </Link>
            )}

            <button className="backBtn" onClick={handleVolver}>
              Volver
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ItemDetail;