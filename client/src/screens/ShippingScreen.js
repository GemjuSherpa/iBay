import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import {saveShippingAddress} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


const ShippingScreen = ({history}) => {

    // get initial state
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    // fill the state values
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    // initialize dispatch
    const dispatch = useDispatch()
    
    // form submit handler
    // onsubmit: 
    //          save address to local storage
    //          route to payment page
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        history.push('/payment')
    }


    return (
        <FormContainer>
            <CheckoutSteps signIn shipping/>
                <h1>Shipping</h1>
                <Form onSubmit = {submitHandler}>
                    <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        >
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Enter City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Enter your postal code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        >
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Enter your country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                        </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
                </Form>
        </FormContainer>
    )
}

export default ShippingScreen
