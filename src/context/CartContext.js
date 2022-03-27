import {createContext, useState} from 'react'

const Context = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) =>{
        const productToAdd = {
            ...product,
            quantity
        } 

        isInCart(product.id) ? updateItemInCart(productToAdd) : addItemToCart(productToAdd)    
    }

    const isInCart = (id) =>{
        return cart.some((product) => product.id === id)
    }

    const updateItemInCart = (id, quantity, productToAdd) => {
        const updatedCart = cart.map(prod => {
            if(prod.id === productToAdd.id) {
                const updatedProduct = {
                    ...prod,
                    quantity: prod.quantity + productToAdd.quantity
                }
                return updatedProduct
            } else {
                return prod
            }
        })

        setCart(updatedCart)
    }
    const addItemToCart = (productToAdd) => {
        setCart([...cart, productToAdd])
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
            isInCart
        }}>
            {children}
        </Context.Provider>

    )


}

export default Context