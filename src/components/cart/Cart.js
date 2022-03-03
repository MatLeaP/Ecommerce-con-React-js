import {useState, useContext } from 'react'
import CartContext from '../../context/CartContext'


const Cart = () => {
    const {cart} = useContext(CartContext)

    const {clearItems} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)

    return(
        <div>
             {cart.map((prod) =>{
                 return(
                    <div key={prod.id}>
                        <h3>{prod.name}</h3>
                        <h3>{prod.quantity} </h3>
                        <button onClick={() => removeItem(prod.id)} >remover</button>
                    </div>

                 )
                
                 })}
           <button onClick={clearItems}>Reiniciar carrito</button>
        </div>
    )


}
export default Cart