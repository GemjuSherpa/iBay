import React, {useState, useEffect} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import {savePaymentMethod} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'



const PaymentScreen = ({history}) => {

    // get initial state
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    // Check if shipping address is available
    if(!shippingAddress){
        history.push('/shipping')
    }

    // Set State payment methods
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    // initialize dispatch
    const dispatch = useDispatch()
    
    // form submit handler
    // onsubmit: 
    //          save address to local storage
    //          route to payment page
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }


    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
                <h1>Payment Method</h1>
                <Form onSubmit = {submitHandler}>
                    <Form.Group>
                        <Form.Label as='legend'>
                            Select Payment Mothod
                        </Form.Label>
                   
                        <Col>
                            <Form.Check type="radio" label="PayPal or Credit Card" id="PayPal" name="paymentMethod" value="PayPal" checked onChange={(e)=>setPaymentMethod(e.target.value)}>

                            </Form.Check>
                            <Form.Check type="radio" label="Stripe" id="PayPal" name="paymentMethod" value="Stripe" checked onChange={(e)=>setPaymentMethod(e.target.value)}>

                            </Form.Check>
                        </Col>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Continue
                    </Button>
                </Form>
        </FormContainer>
    )
}

export default PaymentScreen
