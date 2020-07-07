import { GUEST_FETCH, GUEST_ERROR, GUEST_SUCCESS } from "../actions/guest";

const initialState = {
  id: null,
  error: null,
  isFetching: null,
  authenticated: null
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
    default:
      return state
  }
}