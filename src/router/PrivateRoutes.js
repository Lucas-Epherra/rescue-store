import React from "react";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import Inicio from "../componentes/Inicio/Inicio";
import Cart from "../componentes/Cart/Cart";
import NavbarWidget from "../componentes/navbar/NavarWidget";
import Footer from "../componentes/footer/Footer";
import { Routes, Route } from "react-router-dom";


const PrivateRoutes = () => {
  return (
    <>
      <NavbarWidget />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/*" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PrivateRoutes;
