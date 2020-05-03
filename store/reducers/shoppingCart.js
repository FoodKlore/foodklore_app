import {
  SHOPPING_CART_SUCCESS,
  FAILURE_CART,
  TOUCH_SHOPPING_CART,
  EDIT_QUANTITY_TO_ITEM,
  CLEAR_SHOPPING_CART,
} from "../actions/shoppingCart";

const initialState = {
  items: [],
  error: null,
  isFetching: false,
};

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
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
          // TODO: found a better solution for this
          // Because we don't have access to the original item price, found out what is it based of the current total and current quantity
          const itemPrice = item.total / item.quantity;
          // Now, add quantity requested
          item.quantity += quantity;
          // calculate total with new quantity
          item.total = itemPrice * item.quantity;
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
