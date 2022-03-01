import { useState }  from 'react'

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
                <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </>
    )
}
export default FunctionCounter
