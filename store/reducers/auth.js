import { AUTH_FETCH, AUTH_IS_LOGGED_IN, AUTH_ERROR } from './../actions/auth'


const initialState = {
  isFetching: false,
  errors: null
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
        errors: action.payload
      }
    case AUTH_IS_LOGGED_IN:
      return {
        ...state,
        isFetching: false
      }
    default:
      return initialState
  }
}