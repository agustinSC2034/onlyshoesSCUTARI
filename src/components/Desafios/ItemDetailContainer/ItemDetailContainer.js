import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../../baseDatos/helper";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Utils/firebase";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const queryRef = doc(db,"items",productId);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            console.log(newDoc)
            setItem(newDoc);
        }).catch(error=>console.log(error));
    },[productId])

    console.log('item:', item)
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}