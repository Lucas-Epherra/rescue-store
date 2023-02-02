import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Inicio from './componentes/Inicio/Inicio';
import NavbarWidget from './componentes/navbar/NavarWidget'
import Footer from './componentes/footer/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import Cart from './componentes/Cart/Cart';


function App() {
  
  const [cart,setCart] = useState([])
  console.log(cart)

  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  return (
   
    <CartContext.Provider value={{cart,agregarAlCarrito,isInCart}}>
      <BrowserRouter>
      
        <NavbarWidget/>

        <Routes>

          <Route path='/' element={ <Inicio /> }/>
          <Route path='/*' element={ <Inicio /> }/>
          <Route path='/productos' element={ <ItemListContainer /> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/detalle/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <Cart /> }/>
          
        </Routes>

        <Footer/>

      </BrowserRouter>
    </CartContext.Provider>
      
  )
}

export default App;
