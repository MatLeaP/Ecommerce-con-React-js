import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/firebase';


const ItemDetailContainer = () =>{
    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(true)
    const {productId} = useParams()
    
    useEffect(()=>{
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response =>{
            const product = {id : response.id, ...response.data()}
            setProduct(product)
        }).finally(() =>{
            setLoading(false)
        })

        return(() => {
            setProduct()
        })
    
    },[productId])
    
    return(
        <div className='grilla'>
            {loading ? <h1>CARGANDO</h1> : 
            product ? <ItemDetail product ={product}/> : <h1>EL PRODUCTO NO EXISTE</h1>}
        </div>

    )
}

export default ItemDetailContainer