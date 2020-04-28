export const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART"
export const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const addToShoppingCart = (item, quantity) => dispatch => {
  dispatch({ type: ADD_TO_SHOPPING_CART  });

  setTimeout(() => {
    dispatch({ type: SUCCESS, payload: {...item, quantity} });
  }, 2000);
}

export const removeFromShoppingCart = () => dispatch => {
  dispatch({ type: REMOVE_FROM_SHOPPING_CART, order_id  });

  setTimeout(() => {
    dispatch({ type: SUCCESS, payload: items });
  }, 2000);
}
