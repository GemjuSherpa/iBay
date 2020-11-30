import React from 'react'
import Products from '../products'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {Products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
