import { createContext, useState } from "react";
import { productsArray, getProductData } from "./ProductStore";


export const cartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
})

export function CartProvider ({children}) {
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if(quantity === undefined) {
            return 0
        }
        return quantity
    }

    function addToCart(id) {
        const quantity = getProductQuantity(id)

        if(quantity === 0) { // cart doesnt contain product
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // contain product
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? { 
                        ...product, quantity: product.quantity + 1}
                        : product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts  => 
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function removeFromCart(id) {
        const quantity = getProductQuantity(id)
            deleteFromCart(id)
    }

    function getTotalCost() {
        let totalCost = 0
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    )
}  

export default CartProvider