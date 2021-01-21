import {ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL} from '../constants/orderConstants'
import axios from 'axios'


// Create order
export const createOrder = (order) => async (dispatch, getState) =>{
    try {
        // dispatch order create request
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        // check authorization
        const {userLogin: {userInfo}} = getState()

        const config = {
            headers : {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`/api/orders`, order, config)

        // dispatch order create
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
}