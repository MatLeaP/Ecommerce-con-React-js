import './ItemDetail.css'
import {useContext, useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext' 

const ItemDetail = ({product})=>{
    const [quantity, setQuantity] = useState(0)

    const {addToCart} = useContext(CartContext)

    const onAdd = (quantity) =>{
        setQuantity(quantity)
        addToCart(product, quantity)

    };
   

    return(
        <div className="itemDetail">
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} className="imgCard"/>
            <h2>{product.price}</h2>
            <h2>Categoria: {product.category}</h2>
            <p>stock {product.stock} u.</p>
            {quantity === 0 ?  <ItemCount product={product} onAdd={onAdd} /> : <Link to={`/cart`}>Ir al carrito </Link> }
            
        </div>
    )
}

export default ItemDetail