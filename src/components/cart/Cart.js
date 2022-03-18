import { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './cart.css'
import { useNotificationService } from '../../services/notification/NotificationServices'
import { writeBatch, getDocs, doc, addDoc, collection, Timestamp, where, query, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import ContactForm from '../ContactForm/ContactForm'
import Togglable from '../Togglable/Togglable'



const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })

    const contactFormRef = useRef()

    const {cart,clearItems,removeItem,totalPrice } = useContext(CartContext)

    const setNotification = useNotificationService()

    const handleRemoveItem = (id, name) =>{
        removeItem(id)
        setNotification('sucess', `Se elimino ${name} de la compra`)
    }

    const confirmOrder = () =>{
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== ''){}
        setProcessingOrder(true)

        const objOrder = {
            buyer : contact,
            items : cart,
            total : totalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        
        const batch = writeBatch(firestoreDb)
        const outOfStock = []
        const ids = objOrder.items.map(i => i.id)

        getDocs(query(collection(firestoreDb, 'products'),where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach((docSnapshot) => {
                    if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                        batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity})
                    } else {
                        outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => { 
                        batch.commit()
                        clearItems()
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                } else {
                    outOfStock.forEach(prod => {
                        setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                        removeItem(prod.id)
                    })    
                }               
            }).catch((error) => {
                setNotification('error', error)
            }).finally(() => {
                setProcessingOrder(false)
            })

    } 

if(processingOrder) {
    return <h1>Se esta procesando su orden</h1>
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
                {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                className='Button' 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>
                    </div>    
            }
                <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable> 
                
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

