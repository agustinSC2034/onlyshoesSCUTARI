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
      <h1>Container detalles</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="item-detail">
          <img src={data.img} alt="" />
          <h2>{data.nombre}</h2>
          <h3>{data.precio}</h3>

          <div className="detail">
            <h4>{data.nombre}</h4>
            <p>{data.precio}</p>
          </div>
          <p>{data.precio}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
