import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'

const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
            setLoading(true)

            const collectionRef = categoryId ?
                query(collection(firestoreDb, 'products'),where('category', '==', categoryId)) : 
                collection(firestoreDb,'products')
                
            getDocs(collectionRef).then(response =>{
                const products = response.docs.map(doc =>{
                    return{ id: doc.id, ... doc.data()}
                })
                console.log(products)
                setProducts(products)            
            }).finally(() =>{
                setLoading(false)
            })
            return(() =>{
                setProducts()
            })
        },[categoryId])

    return(
        <div className="ItemListContainer">
            <h1>{title} </h1>
            {loading ? <h1>cargando..</h1> : <ItemList products = {products} /> }
        </div>
    )
    
}

export default ItemListContainer;