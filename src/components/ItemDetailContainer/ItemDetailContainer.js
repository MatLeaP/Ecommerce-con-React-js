import { useEffect, useState } from 'react'
import {traerProductos} from  "../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        traerProductos().then(products =>{
            setProducts(products)
            console.log(products)
        })
    
    },[])
    
    return(
        <div>
            <ItemDetail products={products} />
        </div>

    )
}

export default ItemDetailContainer