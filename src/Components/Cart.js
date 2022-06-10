import React from "react";
import deleteIcon from '../images/icon-delete.svg'

function Cart({ cart  }) {
  function handleDelete (count) {
      const remainingItems = cart.filter( (data, count) => (count !== data.count))
      return remainingItems
    }
  return (
    <div className="cart-popup" style={{ height : `${cart.length * 150}px`}}>
    
       <div>
        <h3>Cart</h3>
        <hr style={{ color :'hsla(220, 14%, 75%, 0.315)'}} />
        <div className= 'cart-popup2'>
            {(cart.length === 0) ? <div className='empty-cart'><p>Your cart is empty</p></div>
            :
            cart.map((data , index ) =>{
              return (
                <div key={index} className="cart-full">
                <div>
                <img src={data.image} width='50px' height='50px' alt='product-image' />
                </div>
                <div>
                <h4>{data.desc}</h4>
                <p>{`$${data.price} x ${data.count} : `} <strong>{`$${data.price * data.count}`}</strong></p>
                </div>
                <div>
                <img src={deleteIcon} alt='delete icon' onClick={handleDelete(data.count)} />
                </div>
              
              </div>
              )
            })

            }
            <div className="cart-item">
            </div>
        </div>
       </div>
    </div>
  );
}

export default Cart;
