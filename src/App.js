import './App.css';
import React from 'react';

import { Navbar } from './components/Desafios/Navbar/Navbar';
import {ItemListContainer} from './components/Desafios/ItemListContainer/itemListContainer'
import {ItemDetailContainer} from './components/Desafios/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Nosotros } from './components/pages/Nosotros/Nosotros';
import { Contacto } from './components/pages/Contacto/Contacto';
import { CarritoPage } from './components/pages/CarritoPage/CarritoPage';
import CartWidget from './components/Desafios/CartWidget/CartWidget';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar CartWidget={CartWidget} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Marcas" element={<ItemListContainer />} />
          <Route path="/Marcas/:tipoProducto" element={<ItemListContainer />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path="/CarritoPage" element={<CarritoPage/>} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
