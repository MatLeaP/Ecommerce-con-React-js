import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './cart.css'
import { useNotificationService } from '../../services/notification/NotificationServices'
import { writeBatch, getDoc, doc, addDoc, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'




const Cart = () => {
    const {cart,clearItems,removeItem,totalPrice } = useContext(CartContext)

    const setNotification = useNotificationService()

    const handleRemoveItem = (id, name) =>{
        removeItem(id)
        setNotification('sucess', `Se elimino ${name} de la compra`)
    }

    const confirmOrder = () =>{
        //setProcessingOrder(true)

        const objOrder = {
            buyer : {
                name: 'Mat',
                phone:'1456',
                adress: 'aca'
            },
            items : cart,
            total : totalPrice(),
            date: new Date()
        }
        
        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response =>{
                if(response.data().stock >= prod.quantity){
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.quantity
                    })
                }else{
                    outOfStock.push({id: response.id, ...response.data})
                }
            })
        })

        if(outOfStock.length === 0){
            addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                batch.commit().then(()=>{
                    setNotification('sucess', `La orden dse genero exitosamente, su numero de orden es: ${id}`)
                })
            }).catch(error =>{
                setNotification('error', error)
            }).finally(()=>{

            })
        }else{

        }

    }


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
                                <button onClick={() => handleRemoveItem(prod.id, prod.name)} >remover</button>                             
                            </div>
                        </div>
                    
                    )                
                })}
                <div className='total' >
                    <h2>Total:${totalPrice()} </h2>
                    <button onClick={clearItems}>Reiniciar carrito</button>
                    <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>
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

