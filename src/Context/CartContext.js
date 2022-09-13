import React, { Children, useState } from "react";
import { arregloProductos } from "../components/baseDatos/helper";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const productCartList = arregloProductos;
  const [productCartList, setProductCartList] = useState([]);

  const isInCart = (id) => {
    const elmIndex = productCartList.findIndex(product => product.id === id);
    if (elmIndex >= 0) {
      return { exist: true, index: elmIndex };
    } else {
      return { exist: false, index: undefined };
    }
  };

  const addProduct = (product) => {
    const inCartObj = isInCart(product.id);
    if (inCartObj.exist) {
      const productListCopy = [...productCartList];
      productListCopy[inCartObj.index].cantidad = productListCopy[inCartObj.index].cantidad + product.cantidad;
      setProductCartList(productListCopy)
    } else {
      const newList = [...productCartList,product];
      setProductCartList(newList);
    }
  };

  const deleteProduct = (idProduct) => {
    const copyArrayOriginal = [...productCartList];
    const newArray = copyArrayOriginal.filter((elm) => elm.id !== idProduct);
    setProductCartList(newArray);
  };

  const deleteAll = () => {
    const productCartList = [];
    setProductCartList(productCartList);
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addProduct,
        deleteProduct,
        deleteAll,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
