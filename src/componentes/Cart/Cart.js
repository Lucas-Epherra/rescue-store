import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2>Tu Compra</h2>
      <hr/>

      {cart.map((item) => (
        <div key={item.id}>
            <h5>{item.name}</h5>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.precio * item.cantidad}</p>
            <hr/>
        </div>
      ))}
    </div>
  );
};

export default Cart;
