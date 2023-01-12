import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import PaginaDeInicio from './componentes/Inicio/Inicio';
import NavbarWidget from './componentes/navbar/NavarWidget'
import Footer from './componentes/footer/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


function App() {

  return (
   
    <BrowserRouter>
    
      <NavbarWidget/>

      <Routes>

        <Route path='/' element={<PaginaDeInicio />}/>
        <Route path='/*' element={<PaginaDeInicio />}/>
        <Route path='/productos' element={<ItemListContainer />}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}/>
        
      </Routes>

      <Footer/>

    </BrowserRouter>

      
  )
}

export default App;
