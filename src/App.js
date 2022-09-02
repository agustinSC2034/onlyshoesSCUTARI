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

function App() {

  return (
    <>
      <Navbar CartWidget={CartWidget}>
      </Navbar>
        <div className="App">
          <ItemListContainer/>
          <ItemDetailContainer/>
        </div>
    </>
  );
}

export default App;
