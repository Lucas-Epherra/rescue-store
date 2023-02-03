import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css'; 


const Cart = () => {
  const { cart, vaciarCart, sumarTotalCart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2>Tu Compra</h2>
      <hr />

      {cart.map((item) => (<ItemCart {...item} />))}

      <h4>Total : ${sumarTotalCart()}</h4>

      <button className="btn btn-danger" onClick={vaciarCart}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;
