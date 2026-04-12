import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../componentes/Inicio/Inicio";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "../componentes/Cart/Cart";
import Checkout from "../componentes/Checkout/Checkout";
import LoginScreen from "../componentes/LoginScreen/LoginScreen";
import RegisterScreen from "../componentes/RegisterScreen/RegisterScreen";
import NavbarWidget from "../componentes/navbar/NavarWidget";
import Footer from "../componentes/footer/Footer";

import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavbarWidget />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;