import React from 'react'
import ProductCard from '../components/products/ProductCard'
import products from '../data/products'

function Home() {

    return (
        <div>
            <div>
                {products.map(product => {
                    return (
                        <div key={product.id} md={4}>
                            <ProductCard product={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home