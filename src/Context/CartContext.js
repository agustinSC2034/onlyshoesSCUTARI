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

    const deleteProduct = (idProduct) =>{
        const copyArrayOriginal = [...productCartList];
        const newArray = copyArrayOriginal.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const deleteAll = () =>{
        const productCartList2 = []
        setProductCartList(productCartList2);
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, deleteAll}}>
            {children}
        </CartContext.Provider>
    )
}