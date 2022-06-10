import React, {useContext, useState} from 'react'
import product1 from '../images/image-product-1.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import product2 from '../images/image-product-2.jpg'
import thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import product3 from '../images/image-product-3.jpg'
import thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import product4 from '../images/image-product-4.jpg'
import thumbnail4 from '../images/image-product-4-thumbnail.jpg'
import ActiveLightbox from './ActiveLightbox'
import { cartContext as CartContext } from "../context/cart";


function Lightbox() {
  const {show, setShow} = useContext(CartContext)
  console.log(show)
  return (
    <div className = 'images'>
          {show && <ActiveLightbox  />}
         <div>
            <img src={product1} alt="product-1 thumbnail" id="product" onClick={() => {
              setShow(true)}} onDoubleClick={ () => {setShow(false)}}/>
          </div>
          <div className='images-show'>
            <img src={thumbnail1} alt="product-1" onClick={_ => {document.querySelector('#product').src = product1}}/>
            <img src={thumbnail2} alt="product-2" onClick={_ => {document.querySelector('#product').src = product2}}/>
            <img src={thumbnail3} alt="product-3" onClick={_ => {document.querySelector('#product').src = product3}}/>
            <img src={thumbnail4} alt="product-4" onClick={_ => {document.querySelector('#product').src = product4}}/>
          </div>
    </div>
  )
}

export default Lightbox