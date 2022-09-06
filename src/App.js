import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import { Button } from "bootstrap";
import { Temas } from "./Temas/Temas";
import ItemCount from "./components/ItemCount/ItemCount.js";
import { Carrito } from "./components/Carrito/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Contacto } from "./components/pages/Contacto/Contacto";
import { Nosotros } from "./components/pages/Nosotros/Nosotros";
import { Nike } from "./components/pages/Nike/Nike";
import { Adidas } from "./components/pages/Marcas/Adidas/Adidas";
import { Puma } from "./components/pages/Puma/Puma";
import { CarritoPage } from "./components/pages/CarritoPage/CarritoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar CartWidget={CartWidget} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Marcas/Nike" element={<Nike />} />
          <Route path="/Marcas/Adidas" element={<Adidas />} />
          <Route path="/Marcas/Puma" element={<Puma />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/CarritoPage" element={<CarritoPage />} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
        {/*<ItemDetailContainer />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
