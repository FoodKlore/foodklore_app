import { ADD_TO_ORDERS, SUCCESS, CANCEL_ORDER } from '../actions/orders'

const initialState = {
  orders: [],
  error: null,
  isFetching: false
}

export const orders = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
      return {
        ...state,
        error: null,
        isFetching: true
      }
    case SUCCESS:
      return {
        ...state,
        error: null,
        orders: [...state.orders, action.payload],
        isFetching: false
      }
    case CANCEL_ORDER:
      return {
        ...state,
        error: null,
        isFetching: true
      }
    default:
      return state;
  }
}