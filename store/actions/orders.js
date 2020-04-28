export const ADD_TO_ORDERS = 'ADD_TO_ORDERS'
export const SUCCESS = 'SUCCESS';
export const CANCEL_ORDER = 'CANCEL_ORDER'

export const addToOrders = (order) => dispatch => {
  dispatch({ type: ADD_TO_ORDERS  });

  setTimeout(() => {
    dispatch({ type: SUCCESS, payload: order });
  }, 2000);
}