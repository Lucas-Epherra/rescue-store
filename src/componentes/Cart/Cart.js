import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  const { cart, vaciarCart, sumarTotalCart } = useContext(CartContext);

  return (
    <div className="cartBody container my-5">
      {cart.length === 0 ? (
        <>
          <h2>Tu Carrio Esta Vacio</h2>
          <hr />
          <p>Agregue sus productos al carrito</p>
          <Link to="/productos" className="btn btn-success mx-3 my-5">
            Ver lista de productos
          </Link>
        </>
      ) : (
        <>
          <h2>Tu Carrito</h2>
          <hr />

          {cart.map((item) => (
            <ItemCart key={item.id} {...item} />
          ))}

          <h4>Total : ${sumarTotalCart()}</h4>

          <button className="btn btn-danger my-3" onClick={vaciarCart}>
            Vaciar Carrito
          </button>

          <Link to="/checkout">
            <button className="btn btn-primary my-3 mx-4" >
              Terminar mi compra
            </button>
          </Link>

          <Link to="/productos" className="btn btn-success mx-2 my-3">
              Continuar comprando
          </Link>

        </>
      )}
    </div>
  );
};

export default Cart;
