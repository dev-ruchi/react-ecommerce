import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <Card style={{ width: '18rem', height: '4rem' }}>
            <Card.Img variant="top" src={props.product.image} />
            <Card.Body>
                <Link to={`/${props.product.slug}`}>{props.product.name}</Link>
                <Card.Text>
                    Price: {props.product.price}
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default ProductCard