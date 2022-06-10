import React  , { useState , useContext } from 'react'
import Avatar from '../images/image-avatar.png'
import sneakerlogo from '../images/logo.svg'
import carticon from '../images/icon-cart.svg'
import menu from '../images/icon-menu.svg'
import '../App.css'
import Cart from './Cart';
import { cartContext } from '../context/cart';


function Nav({ count , desc , image , price,  }) {
    const { cart } = useContext(cartContext);
    const [ render , setRender ] = useState(false)
    const [disp , setDisp] = useState(2);
  return (
    <nav>
        <div className="nav">
            <div className="logo">
                <div>
                    <a className="drop-icon">
                        <img src={menu} alt="menu icon"/></a>
                </div>

                <div className='sneakerlogo'>  <img src={sneakerlogo} alt="sneaker-logo" /></div>

                </div><div className='nav2'>
                    <div class="nav-links">
                        <a href="" className='a-links'>Collections</a>
                        <a href="" className='a-links'>Men</a>
                        <a href="" className='a-links'>Women</a>
                        <a href="" className='a-links'>About</a>
                        <a href="" className='a-links'>Contact</a>
                    </div>
                    <div class="section-two">
                            <p className='cart-count'>{cart.length}</p>
                        <div class="image1">
                            <button onClick={() => {
                                // console.log(disp)
                                setRender(!render)
                                // if(disp % 2 == 0){
                                //     setRender(true);
                                // } else {
                                //     setRender(false)
                                // }
                                // const toggle = disp + 1
                                // setDisp(toggle)
                            } } >
                            <img
                                src={carticon}
                                alt="cart-icon"
                                width="20px"
                                height="20px"
                                />
                            </button>
                        { render && <Cart cart={cart} />}
                        </div>
                        <div class="avatar">
                            <img src={Avatar} alt="" id="profile" />
                        </div>
                    </div>
                </div>
        </div>
    </nav>
  )
}

export default Nav