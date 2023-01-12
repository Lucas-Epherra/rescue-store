import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavbarWidget from './componentes/navbar/NavarWidget'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './app.css'


function App() {

  return (
   
    <BrowserRouter>
    
      <NavbarWidget/>

      <Routes>

        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/productos' element={<ItemListContainer />}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}/>
        
      </Routes>

    </BrowserRouter>

      
  )
}

export default App;
