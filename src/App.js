import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Inicio from "./componentes/Inicio/Inicio";
import NavbarWidget from "./componentes/navbar/NavarWidget";
import Footer from "./componentes/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./componentes/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import LoginScreen from "./componentes/LoginScreen/LoginScreen";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
          <NavbarWidget />

          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/*" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
