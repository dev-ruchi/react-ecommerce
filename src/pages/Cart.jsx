import React, { useState } from 'react'

import products from '../data/products'


function Cart() {

  function getCartItems() {
    let items = []


    if (localStorage.getItem("cartItems")) {
      items = JSON.parse(localStorage.getItem('cartItems'))
    }

    console.log(items)
    return items;

  }

  const [cartItems, setCartItems] = useState(getCartItems())

  return (
    <div>
      {cartItems.map(cartItem => {
        return (
          <div key={cartItem.id} className='bg-violet-200 rounded-xl shadow-xl p-8'>
            <img src={cartItem.image} className="h-48 mb-5" alt="" />
            <h3 className='text-3xl mb-10'>{cartItem.name}</h3>
            <p>Quantity={cartItem.quantity}</p>
             <p className='text-xl font-bold mb-10'>Total=${cartItem.quantity * cartItem.price}</p>
          </div>
        )
      })}
    </div>


  )
}

export default Cart;