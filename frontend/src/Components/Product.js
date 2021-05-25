import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className='py-3 m-3 rounded' >
            <a href={`/product/${product._id}`}></a>
                <Card.Img src = {product.img} variant='top'/>
            <Card.Body>
                <a href={`/product/${product._id}`}></a>
            <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </Card.Text>
            <Card.Text as='h3'>
            ${product.price}
            </Card.Text>
            </Card.Body>    
       
        </Card>

    )
}

export default Product
