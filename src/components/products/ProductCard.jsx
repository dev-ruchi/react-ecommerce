import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div style={{ width: '18rem', height: '4rem' }}>
            <img src={props.product.image} />
            <div>
                <Link to={`/${props.product.slug}`}>{props.product.name}</Link>
                <div>
                    Price: {props.product.price}
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard