import { createContext , useState , useEffect} from "react";

export const CartContext = createContext();


const init = JSON.parse(localStorage.getItem('cart')) || [] ;

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState(init);

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

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  

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
