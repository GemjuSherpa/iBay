import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"
import axios from 'axios'


// Login Actions 
export const login = (email, password) => async (dispatch) =>{
    try {
        // dispatch login request
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login', {email, password}, config)

        // dispatch logn 
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // store user info in local storage
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
}

//Logout Actions
export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}

// Register Actions
export const register = (name, email, password) => async (dispatch) =>{
    try {
        // dispatch register request
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users', {name, email, password}, config)

        // dispatch register
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // dispatch login success and auth user
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
}