import { useEffect, useState } from 'react'
import {getProductsById} from  "../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{
    const [product , setProduct] = useState([])
    const {productId} = useParams()
    
    useEffect(()=>{
        getProductsById(productId).then(product =>{
            setProduct(product)
            
        }).catch(err =>{
            console.log(err)
        })
        return(() => {
            setProduct()
        })
    
    },[productId])
    
    return(
        <div>
            {product ? <ItemDetail product ={product}/> : <h1>Cargando...</h1>}
        </div>

    )
}

export default ItemDetailContainer