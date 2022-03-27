import './ItemDetail.css'
import {useContext, useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext' 
import {useNotificationService} from '../../services/notification/NotificationServices'

const ItemDetail = ({product})=>{
    const [quantity, setQuantity] = useState(0)

    const {addToCart,isInCart} = useContext(CartContext)
    const setNotification = useNotificationService()

    const onAdd = (quantity,id) =>{
        setQuantity(quantity)
        addToCart(product, quantity)
        isInCart(id)
        setNotification('sucess',  `Se agrego ${product.name} al carrito`)

    };

    return(
        <div className="itemDetail">
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} className="imgCard"/>
            <h2>{product.price}</h2>
            <h2>Categoria: {product.category}</h2>
            <p>stock {product.stock} u.</p>
            {quantity === 0 ?  <ItemCount product={product} onAdd={onAdd} /> : <Link to={`/cart`} className='btnToCart' >Ir al carrito </Link> }
            
        </div>
    )
}

export default ItemDetail