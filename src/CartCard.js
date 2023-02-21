import React, { useContext } from 'react'
import { cartContext } from './cartContext'

const CartCard = (props) => {
    const product = props.product
    const cart = useContext(cartContext)
    const productQuantity = cart.getProductQuantity(product.id)
  return (
    <div className="shoes-flex">
        <img src={product.avatar} alt={product.title} />
        <h3>{product.title}</h3>
        <p>#{product.price}</p>
        {productQuantity > 0 ? 
        <div>
            <div className="cart-btn">
                <button onClick={() => cart.deleteFromCart(product.id)} >-</button>
                <h4>{productQuantity}</h4>
                <button onClick={() => cart.addToCart(product.id)}>+</button>
            </div>
            <div className="cart-remove-tbn">
                <button className='remove-btn' onClick={() => cart.removeFromCart(product.id)}>remove</button>
            </div>
        </div> :
        <button className='product-btn' onClick={() => cart.addToCart(product.id)}>add to cart</button>}
    </div>
  )
}

export default CartCard