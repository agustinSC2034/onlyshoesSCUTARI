import React, { useState } from "react";
import BaseComponent from "bootstrap/js/dist/base-component";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./CartContainer.css";
import { Button } from "bootstrap";
import { db } from "../../../Utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

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
    Swal.fire({
      icon: 'success',
      title: 'Gracias por la compra',
      text: 'Su orden fue enviada al mail indicado',
    }
    )
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
              <div className="tituloCarrito">
                <h4>CARRITO</h4>
              </div>
              <div className="descripcionDiv">
                <div className="espacioImg"></div>
                <div className="espacioNombre">
                  <h4>Producto</h4>
                </div>
                <div className="espacioPrecio">
                  <h4>Precio</h4>
                </div>
                <div className="espacioCantidad">
                  <h4>Cantidad</h4>
                </div>
                <div className="espacioPrecioTotal">
                  <h4>Precio Total</h4>
                </div>
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
                    <h4>{item.cantidad}</h4>
                  </div>
                  <div className="divPrecioTotalProducto">
                    <h4>Precio Total ${item.precioTotal}</h4>
                  </div>
                  <div className="botonesCarro">
                    <div className="divButtonBorrarProducto">
                      <button
                        onClick={() => deleteProduct(item.id)}
                        className="btn btn-danger"
                      >
                        X
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </div>

            <div className="formDiv">
              <form className="formCompra" onSubmit={sendOrder}>
                <div class="containerContact">
                  <div class="inputContact">
                    <label for="exampleFormControlInput1" class="form-label">
                      Nombre
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="escribe tu nombre"
                    />
                  </div>

                  <div class="inputContact">
                    <label for="exampleFormControlInput1" class="form-label">
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@mail.com"
                    />
                  </div>

                  <div class="inputContact">
                    <label for="exampleFormControlInput1" class="form-label">
                      Numero de telefono
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="escribe tu numero de telefono"
                    />
                  </div>

                  <div class="buttonsForm">
                    <div className="precioTotalForm">
                      <p>Precio total: {getTotalPrice()}</p>
                    </div>
                    <div className="botonesFormulario2">
                      <button
                        onClick={() => deleteAll()}
                        className="btn btn-danger"
                        
                      >
                        Vaciar el carrito
                      </button>
                      <button type="submit" className="btn btn-success" onClick={updateOrder}>
                        Enviar orden
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          <h1>No has agregado productos</h1>
        )}
      </div>
    </>
  );
};
