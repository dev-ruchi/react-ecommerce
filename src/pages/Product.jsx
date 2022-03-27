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
        <Container>
            <Row>
                <Col md={4}>
                    <img src={product.image} />
                </Col>
                <Col md={{ span: 4, offset: 2 }}>
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>{product.price}</strong></p>
                        <Button variant='success'>Add to Cart</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Product