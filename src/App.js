import './app.css'
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import NavbarWidget from './componentes/navbar/Navbar'

function App() {
  return (
    <div className='contMain'>
      <NavbarWidget/>
      <ItemListContainer text="Bienvenido A Rescue Store"/>
    </div>
  )
}

export default App;
