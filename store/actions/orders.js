export const TOUCH_ORDERS = 'TOUCH_ORDERS'
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS';
export const SET_ORDERS = 'SET_ORDERS';
export const GET_ORDERS = "GET_ORDERS";
export const CANCEL_ORDER = 'CANCEL_ORDER'
export const CLEAR_ORDERS = 'CLEAR_ORDERS'

import axios from 'axios'
import { BACKEND_API } from 'react-native-dotenv'

export const getOrders = () => async dispatch => {
  dispatch({ type: TOUCH_ORDERS  });

  try {
    const { data } = await axios.get(`${BACKEND_API}/orders`);
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

export const addToOrders = ({order, shoppingcart_id}) => async dispatch => {
  dispatch({ type: TOUCH_ORDERS  });

  try {
    const { data } = await axios.post(`${BACKEND_API}/orders`, {
      total: order.total,
      shoppingcart_id
    });
    dispatch({ type: ORDERS_SUCCESS, payload: data });
  } catch (error) {

  }
}

export const clearOrders = () => dispatch => {
  dispatch({ type: TOUCH_ORDERS });

  dispatch({ type: CLEAR_ORDERS });
}