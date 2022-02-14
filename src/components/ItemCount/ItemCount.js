import { useState }  from 'react'

const FunctionCounter = ({stock, initial,}) => {
    const [count, setCount] = useState(initial)
        
    const decrement = () => {
        if(count > initial){
            setCount(count - 1)  
        }
    }

    const increment = () => {        
        if(count < stock){            
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
                <h3>Counter</h3>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={addToCart}>Agregar al carrito</button>
            </div>
        </>
    )
}
export default FunctionCounter
