import {createContext, useState} from 'react'

const Context = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) =>{
        if(isInCart(product.id)) {
            sumarCantidad(product.id, quantity)
        }else{
            setCart([...cart, {...product , quantity}]);           
        }      
    }

    const isInCart = (id) =>{
        const validacion =  cart.some((producto) => producto.id === id)
            return validacion
    }

    const sumarCantidad = (id, quantity) => {
        const cartArray = cart.map((producto)=> producto.id === id && (producto.quantity += quantity))
        setCart(cartArray);
    }

    const clearItems = () =>{
        setCart([]);
    }

    const removeItem = (id) =>{
        const itemsFiltrados = cart.filter((p) => p.id !== id)
        setCart(itemsFiltrados);
    }

    const totalQuantity = () =>{
        let items = 0
        cart.forEach(product => {
            items = items += product.quantity
        })
        return items

    }

    const totalPrice = () =>{
        let total = 0
        cart.forEach(product =>{
            total = total + (product.price) * (product.quantity)
        })
        return total
    }


console.log(cart)

    return(
        <Context.Provider value={{
            cart,
            addToCart,
            clearItems,
            removeItem,
            totalQuantity,
            totalPrice,
                       
        }}>
            {children}
        </Context.Provider>

    )


}

export default Context