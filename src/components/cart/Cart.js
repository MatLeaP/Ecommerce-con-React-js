import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './cart.css'

const Cart = () => {
    const {cart,clearItems,removeItem,totalPrice } = useContext(CartContext)
    
    if(cart.length){
        return(
            <div className='cart'>
                {cart.map((prod) =>{
                    return(
                        <div className="itemsCart">
                            <div key={prod.id} className='item' >
                                <img src= {prod.img}></img>
                                <h2>{prod.name}</h2>
                                <h3>Cantidad:{prod.quantity} </h3>
                                <h4>Subtotal: ${prod.price * prod.quantity} </h4>
                                <button onClick={() => removeItem(prod.id)} >remover</button>                             
                            </div>
                        </div>
                    
                    )                
                })}
                <div className='total' >
                    <h2>Total:${totalPrice()} </h2>
                    <button onClick={clearItems}>Reiniciar carrito</button>
                </div>
                
            </div>
            )
        }
        return(
                <>
                    <h1>Carrito vacio</h1>
                    <Link to='/'>Empezar a comprar</Link>
                </>
            )
    }


export default Cart