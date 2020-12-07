import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_LOGOUT } from "../constants/userConstants"

// user login reducers
export const userLoginReducer = (state = {}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true, products: []}
        case USER_LOGIN_SUCESS:
            return {loading: false, products: action.payload}
        case USER_LOGIN_FAIL:
            return {loadingL: false, error: action.payload }
        case USER_LOGOUT:
            return{}
        default:
            return state
    }
}