import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({id,name,marca,modelo,cantidad,imagen,precio,}) => {

  const { removerItemCart } = useContext(CartContext);

  return (
    <div key={id}>
    <h5>{name}</h5>
    <img className='cartItemImg' src={imagen} alt={marca + modelo} />
    <p>Cantidad: {cantidad}</p>
    <p>Precio: ${precio * cantidad}</p>
    <button className="btn btn-outline-danger" onClick={() =>removerItemCart(id)}><FaTrashAlt/></button>
    <hr />
  </div>
  )
}

export default ItemCart