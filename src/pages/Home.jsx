import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../components/products/ProductCard'
import products from '../data/products'

function Home() {

    return (
        <Container>
            <Row>
                {products.map(product => {
                    return (
                        <Col key={product.id} md={4}>
                            <ProductCard product={product} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Home