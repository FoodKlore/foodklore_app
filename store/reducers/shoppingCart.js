import {
  SHOPPING_CART_SUCCESS,
  FAILURE_CART,
  TOUCH_SHOPPING_CART,
  EDIT_QUANTITY_TO_ITEM,
  CLEAR_SHOPPING_CART,
  GET_SHOPPING_CART
} from "../actions/shoppingCart";

const initialState = {
  items: [],
  error: null,
  isFetching: false,
  current_shoppingcart_id: null
};

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPPING_CART:
      return {
        ...state,
        isFetching: false,
        items: action.payload.items,
        current_shoppingcart_id: action.payload.current_shoppingcart_id,
        error: null
      }
    case SHOPPING_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...state.items, action.payload],
        error: null,
      };
    case FAILURE_CART:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case TOUCH_SHOPPING_CART:
      return {
        ...state,
        isFetching: true,
      };
    case EDIT_QUANTITY_TO_ITEM:
      const { item_id, quantity } = action.payload;
      const items = state.items.map((item) => {
        if (item.id === item_id) {
          // Now, add quantity requested
          item.quantity += quantity;
          return item;
        }
        return item;
      });
      // Now, add it to the state
      return {
        ...state,
        isFetching: false,
        items,
      };
    case CLEAR_SHOPPING_CART:
      return initialState;
    default:
      return state;
  }
};
