import "./App.css";
import React from "react";
import { Navbar } from "./components/Desafios/Navbar/Navbar";
import { ItemListContainer } from "./components/Desafios/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/Desafios/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nosotros } from "./components/pages/Nosotros/Nosotros";
import { Contacto } from "./components/pages/Contacto/Contacto";
import CartWidget from "./components/Desafios/CartWidget/CartWidget";
import { CartContainer } from "./components/Desafios/CartContainer/CartContainer";
import ItemCount from "./components/Desafios/ItemCount/ItemCount";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar CartWidget={CartWidget} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Marcas" element={<ItemListContainer />} />
            <Route
              path="/Marcas/:tipoProducto"
              element={<ItemListContainer />}
            />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
