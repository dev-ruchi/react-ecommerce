import React from 'react'
import ProductCard from '../components/products/ProductCard'
import products from '../data/products'

function Home() {

    return (
        <div className='container mx-auto mt-20'>

            <h1 className='text-3xl mb-4'>All products</h1>
            <div className='grid grid-cols-3 gap-8'>
                {products.map(product => {
                    return (
                        <div key={product.id} className='col-span-1'>
                            <ProductCard product={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home