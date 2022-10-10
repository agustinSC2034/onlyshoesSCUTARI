import React, { useState } from "react";
import BaseComponent from "bootstrap/js/dist/base-component";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./CartContainer.css";
import { Button } from "bootstrap";
import { db } from "../../../Utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export const CartContainer = () => {
  const { productCartList, deleteProduct, deleteAll, getTotalPrice } =
    useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    };
    //crear referencia en la base de datos de donde voy a guardar el documento
    const queryRef = collection(db, "orders");
    //agregamos el documento
    addDoc(queryRef, order).then((respuesta) => setIdOrder(respuesta.id));
    console.log(order);
  };

  const updateOrder = () => {
    const queryRef = doc(db, "items", "QPecYuDxkskZBr3uoVjI");
    updateDoc(queryRef, {
      marca: "zapatos",
      img: "https://firebasestorage.googleapis.com/v0/b/react-41590.appspot.com/o/zapato-hombre.jpg?alt=media&token=36321466-cb68-445e-858a-8772114f12e6",
      precio: 90,
      nombre: "zapatos hombre",
    }).then(() => console.log("producto actualizado"));
  };

  return (
    <>
      <div className="flexCartContainer">
        {productCartList.length > 0 ? (
          <>
            <div className="productCartContainer">
              <div className="descripcionDiv">
                <div className="espacioImg"></div>
                <div className="espacioNombre"><h4>nombre</h4></div>
                <div className="espacioPrecio"><h4>Precio</h4></div>
                <div className="espacioCantidad"><h4>Cantidad</h4></div>
                <div className="espacioPrecioTotal"><h4>Precio Total</h4></div>
                <div className="espacioBotones"></div>
              </div>
              {productCartList.map((item) => (
                <div className="divCreadoProducto">
                  <div className="divImgProducto">
                    <img
                      className="imgProducto"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="divNombreProducto">
                    <h4>{item.nombre}</h4>
                  </div>
                  <div className="divPrecioProducto">
                    <h4>${item.precio}</h4>
                  </div>
                  <div className="divCantidadProducto">
                    <h4> Cantidad: {item.cantidad}</h4>
                  </div>
                  <div className="divPrecioTotalProducto">
                    <h4>Precio Total ${item.precioTotal}</h4>
                  </div>
                  <div className="botonesCarro">
                    <div className="divButtonBorrarProducto">
                      <button
                        onClick={() => deleteProduct(item.id)}
                        className="btn btn botonRojo"
                      >
                        Borrar
                      </button>
                    </div>
                    <div className="divButtonComprarProducto">
                      <button className="btn btn-primary comprar">
                        Comprar
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </div>

            <div className="formDiv">
              <form className="formCompra" onSubmit={sendOrder}>
                <input type="text" placeholder="nombre" />
                <input type="text" placeholder="telefono" />
                <input type="email" placeholder="email" />
                <button type="submit">enviar orden</button>
              </form>

              <button onClick={updateOrder}>actualizar</button>
              <p>Precio total: {getTotalPrice()}</p>
              <button
                onClick={() => deleteAll()}
                className="btn btn-primary botonRojo"
              >
                Vaciar el carrito
              </button>
            </div>
          </>
        ) : (
          <h1>No has agregado productos</h1>
        )}
      </div>
    </>
  );
};
