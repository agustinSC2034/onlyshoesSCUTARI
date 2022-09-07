import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="item-container">
      <h1>Detalles del producto</h1>
      <div className="item-detail">
        <img src={item.img} alt="" />
        <h2>{item.nombre}</h2>
        <h3>${item.precio}</h3>
        <h3>${item.id}</h3>
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
};
