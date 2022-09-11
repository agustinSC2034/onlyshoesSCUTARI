import React, { Children, useState } from "react";
import { arregloProductos } from "../components/baseDatos/helper";
import { createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=>{
    // const productCartList = arregloProductos;
    const [productCartList, setProductCartList] = useState([]);

    const addProduct = (product)=>{
        const newList = [...productCartList,product];
        setProductCartList(newList)
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}