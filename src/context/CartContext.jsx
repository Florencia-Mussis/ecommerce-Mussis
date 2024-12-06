import { createContext, useContext, useEffect, useState } from "react"
export const CartContext = createContext()

const prodFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState (prodFromLocalStorage)

    // Local Storage
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    const addToCart = (item, quantity) =>{
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    if (product.id === item.id) {
                        return {...product, units: product.units + quantity}
                    } else {
                        return product;
                    }
                })
            )
        } else {
            setCart([...cart, {...item, units: quantity}])
        }
    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((product)=> product.id !== id))
    }

    const cartUnits = () => {
        return cart.reduce((acc, product) => (acc += product.units), 0)
    }

    const totalCart = () => {
        return cart.reduce((acc, product) => (acc += product.price * product.units), 0)
    }

    // Descontar stock local 
    const itemStock = (id) => {
        const itemInCart = cart.find((product) => product.id === id)
            if(itemInCart){
                return itemInCart.units
            } else {
                return 0
            }
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartUnits, totalCart, itemStock}}>
          {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

