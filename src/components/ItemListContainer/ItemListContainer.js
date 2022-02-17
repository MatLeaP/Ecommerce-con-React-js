import FunctionCounter from "../ItemCount/ItemCount";
import { useEffect, useState } from "react"
import { getProducts } from "../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"





const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(products => {
            console.log(products)
            setProducts(products)
        })
    }, [])





    return(
        <div className="ItemListContainer">
            <h1>{title} </h1>
            <FunctionCounter stock= "10" initial= {1} />
            <ItemList products = {products} />
        </div>
    )
    
}

export default ItemListContainer;