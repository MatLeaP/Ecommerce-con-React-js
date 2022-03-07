import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductsByCategory} from "../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"


const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
   
    

    useEffect(() => {
            getProductsByCategory(categoryId).then(products => {
            setProducts(products)
            setLoading(false)
        })
     
    }, [categoryId])

    return(
        <div className="ItemListContainer">
            <h1>{title} </h1>
            {loading ? <h1>cargando..</h1> : <ItemList products = {products} /> }
        </div>
    )
    
}

export default ItemListContainer;