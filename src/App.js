import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Inicio from './componentes/Inicio/Inicio';
import NavbarWidget from './componentes/navbar/NavarWidget'
import Footer from './componentes/footer/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';


function App() {

  const profesor = "Conrado Lanusse"
  const alumno = "Materra"
  

  return (
   
    <CartContext.Provider value={{profesor,alumno}}>
      <BrowserRouter>
      
        <NavbarWidget/>

        <Routes>

          <Route path='/' element={<Inicio />}/>
          <Route path='/*' element={<Inicio />}/>
          <Route path='/productos' element={<ItemListContainer />}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}/>
          
        </Routes>

        <Footer/>

      </BrowserRouter>
    </CartContext.Provider>
      
  )
}

export default App;
