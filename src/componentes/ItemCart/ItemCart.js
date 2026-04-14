import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ id, name, marca, modelo, cantidad, imagen, precio }) => {
  const { removerItemCart } = useContext(CartContext);

  const subtotal = new Intl.NumberFormat("es-AR").format(precio * cantidad);
  const precioUnitario = new Intl.NumberFormat("es-AR").format(precio);

  return (
    <article className="cartItemCard">
      <div className="cartItemMedia">
        <div className="cartItemImgBox">
          <img className="cartItemImg" src={imagen} alt={`${marca} ${modelo}`} />
        </div>
      </div>

      <div className="cartItemInfo">
        <div className="cartItemTop">
          <div>
            <h3 className="cartItemTitle">{name}</h3>
            <p className="cartItemMeta">
              {marca} {modelo}
            </p>
          </div>

          <button
            type="button"
            className="removeBtn"
            onClick={() => removerItemCart(id)}
            aria-label={`Eliminar ${name} del carrito`}
          >
            <FaTrashAlt />
          </button>
        </div>

        <div className="cartItemDetails">
          <div className="cartInfoBlock">
            <span className="cartInfoLabel">Cantidad</span>
            <strong>{cantidad}</strong>
          </div>

          <div className="cartInfoBlock">
            <span className="cartInfoLabel">Unitario</span>
            <strong>${precioUnitario}</strong>
          </div>

          <div className="cartInfoBlock subtotalBlock">
            <span className="cartInfoLabel">Subtotal</span>
            <strong>${subtotal}</strong>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemCart;