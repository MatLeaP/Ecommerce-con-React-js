import { useState }  from 'react'
import {useNotificationService} from '../../services/notification/NotificationServices'

const FunctionCounter = ({product, onAdd}) => {
    const [count, setCount] = useState(0)
    const setNotification = useNotificationService()

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)  
        }
    }

    const increment = () => {        
        if(count < product.stock){            
            setCount(count + 1)  
            }else{
                setNotification('sucess',  `No hay stock disponible`)
        }
    }


    return(
        <>
            <div>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
            <div>
                {count > 0 ? <button onClick={()=>onAdd(count)}>Agregar al carrito</button> : null}
            </div>
        </>
    )
}
export default FunctionCounter
