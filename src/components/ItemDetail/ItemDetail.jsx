import React from "react";
import { useState, useEffect } from "react";
import getFetch from "../../helper/helper.js";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((response) => {
      setData(response.find((prod) => prod.id === 1));
      setLoading(false);
    });
  }, []);

  console.log(data);
  return (
    <div className="item-container">
      <h1>Detalles del producto</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="item-detail">
          <img src={data.img} alt="" />
          <h2>{data.nombre}</h2>
          <h3>${data.precio}</h3>
          <h5>Descripción del producto: {data.descripcion}</h5>
          <button className="btn btn-primary">Comprar</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
