import { USER_ERROR, USER_FETCH, USER_CREATE_SUCCESS, USER_AUTHENTICATED, USER_CONFIRM_ACCOUNT, USER_CONFIRMED_ACCOUNT_SUCCESS, USER_CONFIRMED_ACCOUNT_FAILURE } from '../actions/user'

const initialState = {
    id: null,
    username: null,
    email: null,
    nickname: null,
    authenticated: false,
    error: null,
    isFetching: null,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
    case USER_FETCH:
        return {
            ...state,
            isFetching: true
        }
    case USER_CREATE_SUCCESS:
        return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            nickname: action.payload.nickname,
            email: action.payload.email,
            authenticated: action.payload.authenticated,
            isFetching: false
        }
    case USER_AUTHENTICATED:
        return {
            ...state,
            authenticated: action.payload.authenticated,
            isFetching: false
        }
    case USER_ERROR:
        return {
            ...state,
            error: action.payload,
            isFetching: false
        }
    case USER_CONFIRM_ACCOUNT: {
        return {
            ...state,
            error: null,
            isFetching: true,
            authenticated: false
        }
    }
    case USER_CONFIRMED_ACCOUNT_SUCCESS: {
        return {
            ...state,
            error: null,
            isFetching: false,
            authenticated: true
        }
    }
    case USER_CONFIRMED_ACCOUNT_FAILURE:
    {
        return {
            ...state,
            error: action.payload.error,
            isFetching: false,
            authenticated: false
        }
    }
    default:
        return state
    }
}