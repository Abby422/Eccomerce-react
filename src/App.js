import "./App.css";
import React, { Component }  from 'react';
import Nav from "./Components/Nav";
import { useState, useContext } from "react";
import Lightbox from "./Components/Lightbox";
import product1 from "./images/image-product-1-thumbnail.jpg";
import { cartContext as CartContext } from "./context/cart";
import cart2 from './images/icon-cart2.svg'
import iconPlus from './images/icon-plus.svg'
import iconMinus from './images/icon-minus.svg'

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false)

  const productDescription = "Fall Limited Edition";
  const productPrice = 125.00;
  // const totalPrice = productPrice * count

  return (
    <CartContext.Provider value={{
      cart:cart,
      show,
      setShow,
    }}>
      <div className="App">
        <Nav
          count={count}
          desc={productDescription}
          image={product1}
          price={productPrice}
          // totalPrice={totalPrice}
        />
        <div className="body">
          <div className="container">
            <Lightbox />

            <div className="content">
              <h5> SNEAKER COMPANY </h5>
              <br />
              <h1>{productDescription}</h1>
              <h1>Sneakers</h1>
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
              <br />
              <div className="price">
                <div className="output">
                  <h1>${productPrice}.00</h1>
                  <p id="discount">50%</p>
                  <br />
                </div>
                <div id="previous">
                  <p>$250.00</p>
                </div>
              </div>
              <br />
              <div className="buttons">
                <div className="counter">
                  <button
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                  >
                    <img
                      src={iconMinus}
                      alt=""
                      height="3px"
                      width="8px"
                    />
                  </button>
                  <div id="zero">{count}</div>
                  <button onClick={() => setCount(count + 1)}>
                    <img
                      src={iconPlus}
                      alt=""
                      height="9px"
                    />
                  </button>
                </div>
                <button id="buttonadd" disabled={count === 0 } onClick={() =>{
                  setCart([...cart , {
                    desc:productDescription,
                    price:productPrice,
                    count:count,
                    image:product1,
                    id:Math.floor(100 + (Math.random() * 150))
                  }]);

                }}>
                  <img
                    src={cart2}
                    alt=""
                    width="15px"
                  />{" "}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
