import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className='bg-violet-200 rounded-xl shadow-xl p-8'>
            <div className='flex flex-col items-center'>
                <img src={props.product.image} className="h-48 mb-5" />
                <Link to={`/${props.product.slug}`} className='font-bold'>
                    {props.product.name}
                </Link>
                <p>Price: ${props.product.price}</p>

            </div>
        </div>
    )
}

export default ProductCard