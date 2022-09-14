import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const {addProduct} = useContext(CartContext);

  const onAdd = (contador)=>{
    const newProduct = {...item, cantidad:contador}
    console.log('newProduct', newProduct);
    addProduct(newProduct);
    
  } 

  return (
    <div className="item-container">
      <h1>Detalles del producto</h1>
      <div className="item-detail">
        <img src={item.img} alt="" />
        <h2>{item.nombre}</h2>
        <h3>${item.precio}</h3>
        {/*<Link to={`/item/${item.id}`}>
        <button className="btn btn-primary">Comprar</button>
  </Link>*/}
        <ItemCount initial={0} stock={10} onAdd={onAdd}/>
      </div>
    </div>
  );
};
