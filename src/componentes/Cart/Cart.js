import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css'; 


const Cart = () => {
  const { cart, vaciarCart, sumarTotalCart } = useContext(CartContext);

  return (
    <div className="cartBody container my-5">
      <h2>Tu Carrito</h2>
      <hr />

      {cart.map((item) => (<ItemCart {...item} />))}

      <h4>Total : ${sumarTotalCart()}</h4>

      <button className="btn btn-danger my-3" onClick={vaciarCart}>
        Vaciar Carrito
      </button>
      <Link to="/productos" ><button className="btn btn-success mx-3 my-3">Continuar comprando</button></Link>

    </div>
  );
};

export default Cart;
