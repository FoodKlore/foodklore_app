import {
    GUEST_FETCH, GUEST_ERROR, GUEST_SUCCESS, GUEST_CONFIRM_ACCOUNT, GUEST_CONFIRMED_ACCOUNT_SUCCESS, GUEST_CONFIRMED_ACCOUNT_FAILURE
} from '../actions/guest'

const initialState = {
    id: null,
    error: null,
    isFetching: null,
    authenticated: null,
    account_confirmed: false
}

export const guest = (state = initialState, action) => {
    switch (action.type) {
    case GUEST_FETCH:
        return {
            ...state,
            isFetching: true
        }
    case GUEST_SUCCESS:
        return {
            ...state,
            id: action.payload.id,
            authenticated: action.payload.authenticated,
            isFetching: false
        }
    case GUEST_ERROR:
        return {
            ...state,
            error: action.payload,
            isFetching: false
        }
    case GUEST_CONFIRM_ACCOUNT: {
        return {
            ...state,
            error: null,
            isFetching: true
        }
    }
    case GUEST_CONFIRMED_ACCOUNT_SUCCESS: {
        return {
            ...state,
            error: null,
            isFetching: false,
            account_confirmed: true
        }
    }
    case GUEST_CONFIRMED_ACCOUNT_FAILURE:
    {
        return {
            ...state,
            error: action.payload.error,
            isFetching: false,
            account_confirmed: false
        }
    }
    default:
        return state
    }
}