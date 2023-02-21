import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import { getProductData } from './ProductStore'
import { AiFillCloseCircle } from 'react-icons/ai';

const CartTotal = (props) => {
    const cart = useContext(cartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

  return (
      <>
        <div className='cart-item-list'>
            <div className="cart-avatar">
              <li><img src={productData.avatar} alt={productData.title} /></li>
              <li><h3>{productData.title}</h3></li>
              <li><p># {(quantity * productData.price).toFixed(2)}</p></li>
            </div>
            <button color='black' className='remove-cart-btn' onClick={() => cart.removeFromCart(id)}>remove</button>
        </div>
        <hr />
      </>
  )
}

export default CartTotal