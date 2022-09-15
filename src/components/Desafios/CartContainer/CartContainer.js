import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./CartContainer.css";
import { Button } from "bootstrap";

export const CartContainer = () => {
  const { productCartList, deleteProduct, deleteAll} = useContext(CartContext);
  return (
    <div>
      <div className="flexCartContainer">
        {
          productCartList.length>0 ?
        <>
        {productCartList.map((item) => (
          <div className="productCartContainer">
            <img src={item.img} alt={item.title} />
            <h4>{item.nombre}</h4>
            <h4>Precio: ${item.precio}</h4>
            <h4> Cantidad: {item.cantidad}</h4>
            <h4>Precio Total ${item.precioTotal}</h4>
            <button onClick={()=> deleteProduct(item.id)} className="btn btn botonRojo">Borrar</button>
            <button className="btn btn-primary comprar">Comprar</button>
            <hr></hr>
          </div>
        ))}
        <button onClick={()=> deleteAll()} className="btn btn-primary botonRojo">Vaciar el carrito</button>
        </>
        :
        <h1>No has agregado productos</h1>
      }
      </div>
    </div>
  );
};
