export const TOUCH_SHOPPING_CART = "TOUCH_SHOPPING_CART"
export const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART"
export const SHOPPING_CART_SUCCESS = "SHOPPING_CART_SUCCESS"
export const FAILURE_CART = "FAILURE_CART"
export const EDIT_QUANTITY_TO_ITEM = "EDIT_QUANTITY_TO_ITEM"
export const CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART"

export const addToShoppingCart = (item, quantity) => dispatch => {
  dispatch({ type: TOUCH_SHOPPING_CART  });

  dispatch({ type: SHOPPING_CART_SUCCESS, payload: {...item, quantity} });
}

export const addQuantityToItem = (item, quantity) => dispatch => {
  dispatch({ type: TOUCH_SHOPPING_CART  });

  if (item.quantity + quantity <= 0) {
    dispatch({ type: FAILURE_CART, payload: "Can't reduce the quantity to 0 or a negative number" });
  } else {
    dispatch({ type: EDIT_QUANTITY_TO_ITEM, payload: {
      item_id: item.id,
      quantity
    }});
  }

}

export const removeFromShoppingCart = () => dispatch => {
  dispatch({ type: REMOVE_FROM_SHOPPING_CART, order_id  });

  setTimeout(() => {
    dispatch({ type: SHOPPING_CART_SUCCESS, payload: items });
  }, 2000);
}

export const clearShoppingCart = () => dispatch => {
  dispatch({ type: TOUCH_SHOPPING_CART });

  dispatch({ type: CLEAR_SHOPPING_CART });
}