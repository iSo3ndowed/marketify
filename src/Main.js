import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

  const style = {
    color: 'orangered'
  }
  const [activeNav, setActiveNav] = useState('')
  return (
    <div className='main' id='collections'>
        <div className="main-header">
          <h2>Products of the week</h2>
         <div className="main-product-header">
            <ul>
              <li id='#'><Link to ='/Clothes.js' style={style} className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}>clothes</Link></li>
              <li id='#furniture'><Link to ='/Furnitures.js' style={style} className={activeNav === '#Furniture' ? 'active' : ''} onClick={() => setActiveNav('#Furniture')}>Furnitures</Link></li>
              <li id='#Shoes'><Link to ='/Shoes.js' style={style} className={activeNav === '#Shoes' ? 'active' : ''} onClick={() => setActiveNav('#Shoes')}>Shoes</Link></li>
              <li id='#accessories'><Link to ='/Accessories.js' style={style} className={activeNav === '#Accessories' ? 'active' : ''} onClick={() => setActiveNav('#Accessories')}>Accessories</Link></li>
            </ul>
         </div>
        </div>
    </div>
  )
}

export default Main