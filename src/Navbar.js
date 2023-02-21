import React, { useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { BsCartCheck } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { cartContext } from './cartContext';
import CartTotal from './CartTotal';
import { AiFillCloseCircle } from 'react-icons/ai';



const Navbar = () => {
const cart = useContext(cartContext)

const [toggle, setToggle] = useState(false)
const [show, setShow] = useState(false)
const handleClose = () => setShow(false)
const handleShow = () => setShow(!show)

const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
    <div className='navbar'>
        <div className="nav-section">
            <div className="nav-links">
                <a href="#hero-section">home</a>
                <a href="">shop</a>
                <a href="">elements</a>
                <a href="#collections">collections</a>
            </div>
            {toggle && (<div className="nav-link-mobile">
                <a href="#hero-section">home</a>
                <a href="">shop</a>
                <a href="">elements</a>
                <a href="#collection">collections</a>
            </div>)}
            <div className="nav-hamburger">
                <HiMenuAlt3 fontSize='23px' cursor='pointer' onClick={() => setToggle(!toggle)}/>
            </div>
            <div className="nav-logo">
                <h1>marketify</h1>
            </div>
            <div className="nav-ftn">
                <BiSearch cursor='pointer' fontSize='20px'/>
                <CgProfile cursor='pointer' fontSize='20px'/>
                <div>
                    <BsCartCheck className='checkout' cursor='pointer' fontSize='20px' onClick={handleShow}/>
                    <span>{productsCount}</span>
                </div>
            </div>
        </div>
    </div>
    {show && <div className="cart-list">
        <div className="cart-header">
            <AiFillCloseCircle onClick={handleClose} color='black' cursor='pointer' fontSize='25px'/>
            <h1>shopping cart</h1>
        </div>
        { productsCount > 0 ? 
            <div className="cart-body">
                <h3>items in your cart</h3>
                {cart.items.map((currentProduct, index) => {
                    return (
                        <>
                            <CartTotal 
                                key={index}
                                id={currentProduct.id} 
                                quantity={currentProduct.quantity}
                            ></CartTotal>
                        </>
                    )
                 
                    })}
                
                <h3 className='total-cart-product'>Total: #{cart.getTotalCost().toFixed(2)}</h3>
                <button className='payment-btn'>checkout</button>
            </div> 
            : 
            <h1>cart empty</h1>}
    </div>}
    </>
  )
}

export default Navbar