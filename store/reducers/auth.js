import { AUTH_FETCH, IT_IS_LOGGED_IN, AUTH_ERROR, AUTH_LOGOUT } from './../actions/auth'


const initialState = {
    isFetching: false,
    errors: null,
    isLoggedIn: false
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
    case AUTH_FETCH:
        return {
            ...state,
            isFetching: true
        }
    case AUTH_ERROR:
        return {
            ...state,
            isFetching: false,
            isLoggedIn: false,
            errors: action.payload
        }
    case IT_IS_LOGGED_IN:
        return {
            ...state,
            isFetching: false,
            isLoggedIn: true
        }
    case AUTH_LOGOUT:
        return {
            ...state,
            isLoggedIn: false,
            isFetching: false,
            errors: null
        }
    default:
        return initialState
    }
}