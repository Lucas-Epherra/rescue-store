import "./cartWidget.css";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { itemsTotales } = useContext(CartContext);
  const totalItems = itemsTotales();

  return (
    <Link
      to="/cart"
      className="cartLink"
      aria-label={`Carrito con ${totalItems} productos`}
    >
      <span className="cartIconBox">
        <img src={cart} className="cartIcon" alt="Carrito" />
      </span>

      {totalItems > 0 && <span className="numProductos">{totalItems}</span>}
    </Link>
  );
}

export default CartWidget;