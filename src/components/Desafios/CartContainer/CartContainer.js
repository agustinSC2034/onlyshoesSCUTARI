import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./CartContainer.css";

export const CartContainer = () => {
  const { productCartList } = useContext(CartContext);
  return (
    <div>
      <div className="flexCartContainer">
        {productCartList.map((item) => (
          <div className="productCartContainer">
            <img src={item.img} alt={item.title} />
            <h4>{item.nombre}</h4>
            <h4>$ {item.precio}</h4>
            <h4> Cantidad: {item.cantidad}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
