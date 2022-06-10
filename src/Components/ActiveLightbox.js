import React, { useContext } from 'react'
import iconRight from '../images/icon-next.svg'
import close from '../images/icon-close.svg'
import iconLeft from '../images/icon-previous.svg'
import product1 from '../images/image-product-1.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import product2 from '../images/image-product-2.jpg'
import thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import product3 from '../images/image-product-3.jpg'
import thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import product4 from '../images/image-product-4.jpg'
import thumbnail4 from '../images/image-product-4-thumbnail.jpg'
import { cartContext as CartContext } from "../context/cart";


function ActiveLightbox() {
  const {setShow} = useContext(CartContext)
    return (
       <div className='Activelightbox'>
         <div className='modalTop'>
          <img src={close} style={{position: 'relative', left: '290px', width: '20px'}}  onClick={() => {setShow(false)}}/>
          <div className='image-selected'>
            <img src={iconLeft} id='nextIcon1'/>
            <img src={product1} alt="product-1 thumbnail" id="product1"/>
            <img src={iconRight} id='nextIcon'/>
          </div>
          <div className='image-show'>
            <div><img src={thumbnail1} alt="product-1" onClick={_ => {document.querySelector('#product').src = product1}}/></div>
            <div><img src={thumbnail2} alt="product-2" onClick={_ => {document.querySelector('#product').src = product2}}/></div>
            <div><img src={thumbnail3} alt="product-3" onClick={_ => {document.querySelector('#product').src = product3}}/></div>
            <div><img src={thumbnail4} alt="product-4" onClick={_ => {document.querySelector('#product').src = product4}}/></div>
          </div>
         </div>
       </div>
    )
}

export default ActiveLightbox