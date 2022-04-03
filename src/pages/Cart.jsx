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
    <div className='px-2 container mt-10 mx-auto'>
      <h3 className='text-2xl mb-10'>Items in your cart</h3>
      {cartItems.map(cartItem => {
        return (
          <div key={cartItem.id} className='bg-violet-200 rounded-xl shadow-xl grid grid-cols-6 p-8 mb-10'>
            <img src={cartItem.image} className="h-48 mb-5 col-span-1" alt="" />
            <div className='col-span-2'>
              <h3 className='text-3xl mb-10'>{cartItem.name}</h3>
              <p>Quantity: {cartItem.quantity}</p>
              <p className='text-xl font-bold mb-10'>Total: ${cartItem.quantity * cartItem.price}</p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Checkout</button>
            </div>
          </div>

        )
      })}
    </div>


  )
}

export default Cart;