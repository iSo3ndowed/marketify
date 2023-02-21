import React, { useContext } from 'react'
import CartCard from './CartCard'
import { productsArray } from './ProductStore'

const Shoes = () => {
  
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

export default Shoes