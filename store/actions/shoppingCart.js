export const TOUCH_SHOPPING_CART = "TOUCH_SHOPPING_CART";
export const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";
export const SHOPPING_CART_SUCCESS = "SHOPPING_CART_SUCCESS";
export const FAILURE_CART = "FAILURE_CART";
export const EDIT_QUANTITY_TO_ITEM = "EDIT_QUANTITY_TO_ITEM";
export const CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART";
export const GET_SHOPPING_CART = "GET_SHOPPING_CART";

import axios from "axios";
import { BACKEND_API } from "../../constants";

export const getShoppingCart = () => (dispatch) => {
  dispatch({ type: TOUCH_SHOPPING_CART });

  axios
    .get(`${BACKEND_API}/shoppingcart`)
    .then(({ data }) => {
      // Retrive all menus from the shoppingcart_items relationship
      if (data) {
        const current_shoppingcart_id = data.id;
        const items = data.shoppingcart_items.reduce(function (
          items,
          shoppingcart_item
        ) {
          return items.concat({
            ...shoppingcart_item.menu,
            quantity: shoppingcart_item.quantity,
            shoppingcart_items_id: shoppingcart_item.id,
          });
        },
        []);
        dispatch({
          type: GET_SHOPPING_CART,
          payload: {
            items,
            current_shoppingcart_id,
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FAILURE_CART });
    });
};

export const addToShoppingCart = (
  item,
  quantity,
  current_shoppingcart_id
) => async (dispatch) => {
  dispatch({ type: TOUCH_SHOPPING_CART });
  if (current_shoppingcart_id) {
    axios
      .post(`${BACKEND_API}/shoppingcart_items`, {
        menu_id: item.id,
        quantity,
        shoppingcart_id: current_shoppingcart_id,
      })
      .then(({ data }) => {
        dispatch({
          type: SHOPPING_CART_SUCCESS,
          payload: {
            ...data.menu,
            quantity: data.quantity,
            shoppingcart_items_id: data.id,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FAILURE_CART,
          payload: "There was an error adding item to shoppingcart",
        });
      });
  } else {
    try {
      // TODO: Los parametros se cambiaran por usuario cuando se tengan, por el momento se envia un objeto vacío
      // TODO: Save user's token on the phone
      // const user_token = await AsyncStorage.getItem('TASKS');
      const entity_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdXRoX2VudGl0eV9pZCI6NTYsImVudGl0eSI6Ikd1ZXN0IiwiZXhwIjoxNTkzNTY2OTM3fQ.QXqSIH2CGMszk-0TIQWI2rgmMKdNI31S0MOR1v6bcpg";
      let { data } = await axios.post(`${BACKEND_API}/shoppingcart`, {
        shoppingcart: {
          entity_token
        },
      });
      // TODO: Guardar el id en el telefono por si refrescan o cierran la app, esta información siga disponible
      const current_shoppingcart_id = data.id;
      dispatch({
        type: GET_SHOPPING_CART,
        payload: {
          items: [],
          current_shoppingcart_id,
        },
      });
      try {
        dispatch({ type: TOUCH_SHOPPING_CART });

        let { data } = await axios.post(`${BACKEND_API}/shoppingcart_items`, {
          menu_id: item.id,
          quantity,
          shoppingcart_id: current_shoppingcart_id,
        });

        dispatch({
          type: SHOPPING_CART_SUCCESS,
          payload: {
            ...data.menu,
            quantity: data.quantity,
            shoppingcart_items_id: data.id,
          },
        });
      } catch (shoppingcart_item_err) {
        console.log(shoppingcart_item_err);
        dispatch({
          type: FAILURE_CART,
          payload: "There was an error adding item to shoppingcart",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAILURE_CART,
        payload: "There was an error creating the shoppingcart",
      });
    }
  }
};

export const addQuantityToItem = (item, quantity) => (dispatch) => {
  dispatch({ type: TOUCH_SHOPPING_CART });

  if (item.quantity + quantity <= 0) {
    dispatch({
      type: FAILURE_CART,
      payload: "Can't reduce the quantity to 0 or a negative number",
    });
  } else {
    if (item.shoppingcart_items_id) {
      axios
        .put(
          `${BACKEND_API}/shoppingcart_items/${item.shoppingcart_items_id}`,
          {
            quantity: item.quantity + quantity,
          }
        )
        .then((data) => {
          dispatch({
            type: EDIT_QUANTITY_TO_ITEM,
            payload: {
              item_id: item.id,
              quantity,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: FAILURE_CART,
            payload: "There was a server error processing your request.",
          });
        });
    } else {
      dispatch({
        type: EDIT_QUANTITY_TO_ITEM,
        payload: {
          item_id: item.id,
          quantity,
        },
      });
    }
  }
};

export const removeFromShoppingCart = () => (dispatch) => {
  dispatch({ type: REMOVE_FROM_SHOPPING_CART, order_id });

  setTimeout(() => {
    dispatch({ type: SHOPPING_CART_SUCCESS, payload: items });
  }, 2000);
};

export const clearShoppingCart = () => (dispatch) => {
  dispatch({ type: TOUCH_SHOPPING_CART });

  dispatch({ type: CLEAR_SHOPPING_CART });
};
