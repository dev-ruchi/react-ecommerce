import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Product() {


    const { slug } = useParams()

    return (
        <Container>{ slug }</Container>
    )
}

export default Product