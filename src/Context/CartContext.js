import React, { Children, useState } from "react";
import { arregloProductos } from "../components/baseDatos/helper";
import { createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

  const isInCart = (id) => {
    const elementExists = productCartList.some(
      (elemento) => elemento.id === id
    );
    return elementExists;
  };

  const addProduct = (product, qty) => {
    Swal.fire({
      icon: "success",
      text: "Su producto fue agregado al carrito",
    });
    const newList = [...productCartList];
    if (isInCart(product.id)) {
      const productIndex = productCartList.findIndex(
        (element) => element.id === product.id
      );
      newList[productIndex].cantidad = newList[productIndex].cantidad + qty;
      newList[productIndex].precioTotal =
        newList[productIndex].cantidad * newList[productIndex].precio;
      setProductCartList(newList);
    } else {
      const newProduct = {
        ...product,
        cantidad: qty,
        precioTotal: qty * product.precio,
      };
      const newList = [...productCartList];
      newList.push(newProduct);
      setProductCartList(newList);
    }
  };

  const deleteProduct = (idProduct) => {
    const copyArrayOriginal = [...productCartList];
    const newArray = copyArrayOriginal.filter((elm) => elm.id !== idProduct);
    setProductCartList(newArray);
  };

  const deleteAll = () => {
    Swal.fire({
      title: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "Su carrito a sido eliminado.", "Exito");
        const productCartList = [];
        setProductCartList(productCartList);
      }
    });
  };

  const getTotalProducts = () => {
    const totalProducts = productCartList.reduce(
      (acc, item) => acc + item.cantidad,
      0
    );
    return totalProducts;
  };

  const getTotalPrice = () => {
    const totalPriceProducts = productCartList.reduce(
      (acc, item) => acc + item.precioTotal,
      0
    );
    return totalPriceProducts;
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addProduct,
        deleteProduct,
        deleteAll,
        isInCart,
        getTotalProducts,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
