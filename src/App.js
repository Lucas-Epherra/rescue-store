import './app.css'
import ItemDetailContainer from './componentes/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import NavbarWidget from './componentes/navbar/Navbar'

function App() {
  return (
    <div className='contMain'>
      <NavbarWidget/>
      <ItemListContainer text="Bienvenido A Rescue Store"/>
      {/* <ItemDetailContainer itemId={10}/> */}
      
    </div>
  )
}

export default App;
