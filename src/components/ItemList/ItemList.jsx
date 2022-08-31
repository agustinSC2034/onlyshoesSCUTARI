import {useState,useEffect} from 'react'
import getFetch from '../../helper/helper.js'
import Item from '../Item/Item.jsx'
import './ItemList.css'

const ItemList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        getFetch.then(data => {
            setData(data)
            setLoading(false)
        })
    }, [])

    return(
        <>
        <h1>Productos en stock</h1>
        {
          loading ? <h2>Espere por favor...</h2>
          :
          <div className='grid-product'>
            {data.map(data => (
                <Item key={data.nombre} data={data}/>
            ))}
          </div>
        }
        </>
    )
}

export default ItemList;

