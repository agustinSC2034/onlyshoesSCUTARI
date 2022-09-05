import logo from "./logo.svg";
import {useState, useEffect} from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import { Button } from 'bootstrap';
import { Temas } from "./Temas/Temas";
import ItemCount from "./components/ItemCount/ItemCount.js";
import { Carrito } from "./components/Carrito/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar CartWidget={CartWidget}>
        <Routes>
          <Route></Route>
        </Routes>
      </Navbar>
        <div className="App">
          <ItemListContainer/>
          {/*<ItemDetailContainer/>*/}
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
