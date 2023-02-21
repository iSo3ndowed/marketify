import React from 'react'
import { productsArray } from './ProductStore'
import CartCard from './CartCard'

const Furnitures = () => {
  return (
    <div className='shoes-wrap'>
      {productsArray.map((product, index) => (
    <div key={index}>
      <CartCard product={product}/>
    </div>
   ))}
   </div>
  )
}

export default Furnitures