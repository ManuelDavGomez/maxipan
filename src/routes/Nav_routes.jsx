import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio.jsx";
import Error from "../pages/Error/Error.jsx";
import Nosotros from "../pages/Nosotros/Nosotros.jsx";
import Pastel from "../pages/pastel/Pastel.jsx";
import Contacto from "../pages/contacto/Contacto.jsx";
import Producto from "../pages/Productos/Producto.jsx";
import Cart from "../components/cart/Cart.jsx";

const Nav_routes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<Error />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/crea-tu-pastel" element={<Pastel />} />
        <Route path="/contactanos" element={<Contacto />} />
        <Route path="/productos" element={<Producto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Nav_routes;
