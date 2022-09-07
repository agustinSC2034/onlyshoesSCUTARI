import { Item } from "../Item/Item"
import './ItemList.css';
import {Link} from 'react-router-dom';

export const ItemList = ({items})=>{
    return(
        <>
        <h1>ONLYSHOES</h1>
          <div className='grid-product'>
            {items.map(producto => (
                <Link key={producto.id} to={`/item/${producto.id}`}>
                <Item item={producto}/>
            </Link>
            ))}
          </div>
        </>
    )
}

