import { useState }  from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

const FunctionCounter = ({product, onAdd}) => {
    const [count, setCount] = useState(0)
        
    const decrement = () => {
        if(count > 0){
            setCount(count - 1)  
        }
    }

    const increment = () => {        
        if(count < product.stock){            
            setCount(count + 1)  
            }else{
                alert("Maximo de unidades disponibles")
        }
    }

    const addToCart = () => {
        alert("Eligio " + count + " productos")
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
