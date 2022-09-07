import React from "react";
import "./Item.css";
import { Button } from 'bootstrap';
import { Link } from "react-router-dom";

export const Item = ({item})=>{
  return(
      <div className="product">
          <img src={item.img} alt={item.title}/>
          <h4>{item.nombre}</h4>
          <p>$ {item.precio}</p>
          <Link to={`/item/${item.id}`}>
          <button className="btn btn-primary">Ver detalle</button>
          </Link>
      </div>
  )
}
