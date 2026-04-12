import React from "react";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import Inicio from "../componentes/Inicio/Inicio";
import Cart from "../componentes/Cart/Cart";
import NavbarWidget from "../componentes/navbar/NavarWidget";
import Footer from "../componentes/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Checkout from "../componentes/Checkout/Checkout";

const PrivateRoutes = () => {
  return (
    <>
      <NavbarWidget />

      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PrivateRoutes;
