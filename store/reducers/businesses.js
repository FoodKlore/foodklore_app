import {
  BUSINESSES_ERROR, BUSINESSES_FETCH, BUSINESSES_SUCCESS
} from '../actions/businesses'

const initialState = {
  businesses: [],
  error: null,
  isFetching: false
}

export const businesses = (state = initialState, action) => {
  switch (action.type) {
    case BUSINESSES_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case BUSINESSES_SUCCESS:
      return {
        ...state,
        businesses: action.payload,
        isFetching: false
      }
    case BUSINESSES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}