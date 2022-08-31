import React from "react";
import "./Item.css";
import { Button } from 'bootstrap';

const Item = ({ data }) => {
  return (
    <div>
      <div className="product" key={data.nombre}>
        <img src={data.img} alt="" />
        <h1>{data.nombre}</h1>
        <h2>{data.precio}</h2>
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
};

export default Item;

