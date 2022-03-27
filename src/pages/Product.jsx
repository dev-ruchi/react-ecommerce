import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import products from '../data/products'

function Product() {
    const { slug } = useParams()
    const [product, setProduct] = useState(getProuctFromSlug())

    function getProuctFromSlug() {
       return products.find(item => item.slug === slug)
    }



    return (
        <Container>
            
        </Container>
    )
}

export default Product