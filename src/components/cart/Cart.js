import {useState, useContext } from 'react'
import CartContext from '../../context/CartContext'


const Cart = () => {
    const {cart} = useContext(CartContext)

    const {clearItems} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)

    return(
        <div>
             {cart.map((prod) =>(
                 
                <li key={prod.id}> {prod.quantity}
                    <button onClick={removeItem} >remover</button>
                </li>
                
            ))}
           <button onClick={clearItems}>Reiniciar carrito</button>
        </div>
    )


}
export default Cart