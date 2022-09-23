import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext';
import './CartItem.css';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.nombre}</p>
                <p>precio unitario: {item.precio}</p>
                <p>cantidad: {item.cantidad}</p>
                <p>Precio total: {item.precioTotal}</p>
                <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}
