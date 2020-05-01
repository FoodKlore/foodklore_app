import { SHOPPING_CART_SUCCESS, SHOPPING_CART_FAILURE, ADD_TO_SHOPPING_CART, REMOVE_FROM_SHOPPING_CART } from '../actions/shoppingCart'

const initialState = {
  items: [],
  error: null,
  isFetching: false,
}

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...state.items, action.payload],
        error: null
      }
    case SHOPPING_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case ADD_TO_SHOPPING_CART:
      return {
        ...state,
        isFetching: true
      }
    default:
      return state;
  }
}