import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'

function Product() {
    const { slug } = useParams()
    const [product, setProduct] = useState(getProuctFromSlug())

    function getProuctFromSlug() {
        return products.find(item => item.slug === slug)
    }

    return (
        <div className='container mt-10 mx-auto'>
            <div className='grid grid-cols-3 gap-8'>
                <div className='col-span-1'>
                    <img src={product.image} />
                </div>
                <div className='col-span-2'>
                    <h3 className='text-4xl mb-10'>{product.name}</h3>
                    <p className='mb-10'>{product.description}</p>
                    <p className='text-xl font-bold mb-10'>{product.price}</p>
                    <button className='px-5 py-3 bg-green-600 text-white mb-10'>Add to Cart</button>

                    <ul>
                        {
                            product.offers.map(
                                offer => <li className='font-semibold list-disc list-inside'>{offer}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product