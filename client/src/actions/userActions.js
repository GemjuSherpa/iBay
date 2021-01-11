import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"
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


// User details actions
export const getUserDetails = (id) => async (dispatch, getState) =>{
    try {
        // dispatch user details request
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers : {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/users/${id}`, config)

        // dispatch get user details
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
}


// Update user profile actions
export const updateUserProfile = (user) => async (dispatch, getState) =>{
    try {
        // dispatch user details update request
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers : {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/users/profile`, user, config)

        // dispatch update user details success
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        // dispatch user login success
        // To reflect the changes in the front end immediately after the update
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
}