export const ADD_TO_ORDERS = 'ADD_TO_ORDERS'
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS';
export const CANCEL_ORDER = 'CANCEL_ORDER'
export const CLEAR_ORDERS = 'CLEAR_ORDERS'

export const addToOrders = (order) => dispatch => {
  dispatch({ type: ADD_TO_ORDERS  });

  setTimeout(() => {
    dispatch({ type: ORDERS_SUCCESS, payload: order });
  }, 2000);
}

export const clearOrders = () => dispatch => {
  dispatch({ type: ADD_TO_ORDERS });

  dispatch({ type: CLEAR_ORDERS });
}