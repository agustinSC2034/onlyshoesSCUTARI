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
        {productCartList.map((item) => (
          <div className="productCartContainer">
            <img src={item.img} alt={item.title} />
            <h4>{item.nombre}</h4>
            <h4>$ {item.precio}</h4>
            <h4> Cantidad: {item.cantidad}</h4>
            <button onClick={()=> deleteProduct(item.id)} className="btn btn botonRojo">Borrar</button>
            <button className="btn btn-primary comprar">Comprar</button>
          </div>
        ))}
        <button onClick={()=> deleteAll()} className="btn btn-primary botonRojo">Borrar todos los productos</button>
      </div>
    </div>
  );
};
