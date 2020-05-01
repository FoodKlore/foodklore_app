export const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART"
export const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART"
export const SHOPPING_CART_SUCCESS = "SHOPPING_CART_SUCCESS"
export const FAILURE = "FAILURE"

export const addToShoppingCart = (item, quantity) => dispatch => {
  dispatch({ type: ADD_TO_SHOPPING_CART  });

  dispatch({ type: SHOPPING_CART_SUCCESS, payload: {...item, quantity} });
}

export const removeFromShoppingCart = () => dispatch => {
  dispatch({ type: REMOVE_FROM_SHOPPING_CART, order_id  });

  setTimeout(() => {
    dispatch({ type: SHOPPING_CART_SUCCESS, payload: items });
  }, 2000);
}
