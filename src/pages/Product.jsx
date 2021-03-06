import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'

function Product() {
    const { slug } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState(getProuctFromSlug())

    function getProuctFromSlug() {
        return products.find(item => item.slug === slug)
    }



    function addToCard() {
        let cartItems = []

        if (localStorage.getItem('cartItems')) {
            cartItems = JSON.parse(localStorage.getItem('cartItems'))
        }

        if (cartItems.findIndex(cartItem => cartItem.id === product.id) > -1) {
            alert("Item already exists in the cart.")
            return;
        }

        cartItems.push({
            id: product.id,
            quantity: quantity,
            name: product.name,
            slug: product.slug,
            price: product.price,
            image: product.image
        })

        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        alert("Item saved to the cart")
    }

    return (
        <div className='container mt-10 mx-auto'>
            <div className='px-2 md:grid grid-cols-3 gap-8'>
                <div className='col-span-1'>
                    <img src={product.image} />
                </div>
                <div className='col-span-2'>
                    <h3 className='text-4xl mb-10'>{product.name}</h3>
                    <p className='mb-10'>{product.description}</p>
                    <p className='text-xl font-bold mb-10'>${product.price}</p>
                    <input type="number" value={quantity} placeholder="" min={1} onChange={(e) => setQuantity(e.target.value)}/>
                    <button onClick={addToCard} className='px-5 py-3 bg-green-600 text-white mb-10'>Add to Cart</button>

                    <ul>
                        {
                            product.offers.map(
                                offer => <li key={offer} className='font-semibold list-disc list-inside'>{offer}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
                        
        </div>
    )
}

export default Product