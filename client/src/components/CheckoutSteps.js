import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const CheckoutSteps = (signIn, shipping, paymentMethod, placeOrder) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {signIn ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>Sign In {' '}<i class="fas fa-angle-double-right"></i></Nav.Link>
                    </LinkContainer>
                ):
                    <Nav.Link disabled>Sign In</Nav.Link>
                }
            </Nav.Item>

            <Nav.Item>
                {shipping ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>Shipping {' '} <i class="fas fa-angle-double-right"></i></Nav.Link>
                    </LinkContainer>
                ):
                    <Nav.Link disabled>Shipping</Nav.Link>
                }
            </Nav.Item>

            <Nav.Item>
                {paymentMethod ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>Payment Methods {' '} <i class="fas fa-angle-double-right"></i></Nav.Link>
                    </LinkContainer>
                ):
                    <Nav.Link disabled>Payment Methods</Nav.Link>
                }
            </Nav.Item>

            <Nav.Item>
                {placeOrder ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Place Order</Nav.Link>
                    </LinkContainer>
                ):
                    <Nav.Link disabled>Place Order</Nav.Link>
                }
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
