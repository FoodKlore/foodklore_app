export const TOUCH_ORDERS = 'TOUCH_ORDERS'
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS';
export const SET_ORDERS = 'SET_ORDERS';
export const GET_ORDERS = "GET_ORDERS";
export const CANCEL_ORDER = 'CANCEL_ORDER'
export const CLEAR_ORDERS = 'CLEAR_ORDERS'

import axios from 'axios'
import { PROD_BACKEND_API } from 'react-native-dotenv'

export const getOrders = () => async dispatch => {
  dispatch({ type: TOUCH_ORDERS  });

  try {
    const { data } = await axios.get(`${PROD_BACKEND_API}/orders`);
    const orders = data.reduce(function(orders_with_status, order) {
      return orders_with_status.concat({
        ...order,
        status: order.order_status.status
      });
    }, []);
    dispatch({ type: SET_ORDERS, payload: orders });
  } catch (error) {

  }
}

export const addToOrders = (payload) => async dispatch => {
  dispatch({ type: TOUCH_ORDERS  });

  // 1. Check if user is logged in, send total and shoppingcart_id info over the server to create payload
  // 2. if user is not logged in, we will return false and show the accounts view. The payload will be stored in the phone storage
  // 3. After the email is being sent, get the payload from storage and dispatch add to order again.
  // 4. If user is logged in, send payload to the POST /orders endpoint and delete it from local storage afterwards.

  try {
    // const { data } = await axios.post(`${PROD_BACKEND_API}/orders`, {
    //   total: total, // sent from email link as payload
    //   shoppingcart_id // sent from email link as payload
    // });
    const { data } = await axios.post(`${PROD_BACKEND_API}/orders`, {
      payload
    });

    dispatch({ type: ORDERS_SUCCESS, payload: data });
    return true;
  } catch (error) {
    return false;
  }
}

export const clearOrders = () => dispatch => {
  dispatch({ type: TOUCH_ORDERS });

  dispatch({ type: CLEAR_ORDERS });
}