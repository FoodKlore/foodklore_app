export const TOUCH_SHOPPING_CART = "TOUCH_SHOPPING_CART"
export const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART"
export const SHOPPING_CART_SUCCESS = "SHOPPING_CART_SUCCESS"
export const FAILURE_CART = "FAILURE_CART"
export const EDIT_QUANTITY_TO_ITEM = "EDIT_QUANTITY_TO_ITEM"
export const CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART"
export const GET_SHOPPING_CART = "GET_SHOPPING_CART"

import axios from 'axios'
import { BACKEND_API } from 'react-native-dotenv'
import { useSelector } from 'react-redux'

export const getShoppingCart = () => dispatch => {
  dispatch({ type: TOUCH_SHOPPING_CART  });

  axios.get(`${BACKEND_API}/shoppingcart`).then(({data}) => {
    // Retrive all menus from the shoppingcart_items relationship
    if(data.shoppingcart_items.length > 0) {
      const current_shoppingcart_id = data.id;
      const items = data.shoppingcart_items.reduce(function(items, shoppingcart_item) {
        return items.concat({
            ...shoppingcart_item.menu,
            quantity: shoppingcart_item.quantity,
            shoppingcart_items_id:  shoppingcart_item.id,
        })
      }, []);
      dispatch({ type: GET_SHOPPING_CART, payload: {
        items,
        current_shoppingcart_id
      } });
    }
  }).catch( error => {
    console.log(error);
    dispatch({ type: FAILURE_CART });
  });
}

export const addToShoppingCart = (item, quantity) => dispatch => {
  dispatch({ type: TOUCH_SHOPPING_CART  });
  const { current_shoppingcart_id } = useSelector(state => state.shoppingCart);
  if (current_shoppingcart_id) {
    axios.post(`${BACKEND_API}/shoppingcart_items`, {
      menu_id: item.menu_id,
      quantity,
      shoppingcart_id: current_shoppingcart_id
    }).then(({data}) => {
      dispatch({ type: SHOPPING_CART_SUCCESS, payload: {...item, quantity} });
    }).catch(error => {
      console.log(error);
      dispatch({ type: FAILURE_CART, payload: "There was an error adding item to shoppingcart" });
    });
  }
}

export const addQuantityToItem = (item, quantity) => dispatch => {
  dispatch({ type: TOUCH_SHOPPING_CART  });

  if (item.quantity + quantity <= 0) {
    dispatch({ type: FAILURE_CART, payload: "Can't reduce the quantity to 0 or a negative number" });
  } else {
    if(item.shoppingcart_items_id) {
      axios.put(`${BACKEND_API}/shoppingcart_items/${item.shoppingcart_items_id}`, {
        quantity: item.quantity + quantity,
      }).then((data) => {
        dispatch({ type: EDIT_QUANTITY_TO_ITEM, payload: {
          item_id: item.id,
          quantity
        }});
      }).catch(error => {
        dispatch({ type: FAILURE_CART, payload: "There was a server error processing your request." });
      });
    } else {
      dispatch({ type: EDIT_QUANTITY_TO_ITEM, payload: {
        item_id: item.id,
        quantity
      }});
    }
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