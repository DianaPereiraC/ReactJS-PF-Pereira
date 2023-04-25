import React from "react";
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { Cart } from 'react-bootstrap-icons';

function CartWidget() {
  const [cartQuantity, setCartQuantity] = useState(updateCartQuantity)
  
  function updateCartQuantity() {
    let currentCart = JSON.parse(localStorage.getItem('cart')) || []

    if (currentCart.length === 0) {
      return 0
    }

    let totalCount = 0
    for (const productElement of currentCart) {
      totalCount += productElement.quantity
    }
    return totalCount
  }
  
  window.addEventListener('cartUpdate', ()=> {
    setCartQuantity(updateCartQuantity())
  })

  return <>
    <Nav.Link href="/checkout"><Cart size={25} className="align-middle"/><span id="cart-badge">{ cartQuantity }</span></Nav.Link>
  </>;
}

export default CartWidget