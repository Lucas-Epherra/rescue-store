import { createContext , useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  console.log(cart);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const removerItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const vaciarCart = () => {
    setCart([]);
  };

  const sumarTotalCart = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const itemsTotales = () => {
    return cart.reduce((acc,item) => acc + item.cantidad,0 ) 
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        vaciarCart,
        sumarTotalCart,
        removerItemCart,
        itemsTotales
      }}
    >
        {children}
    </CartContext.Provider>
  );
};
