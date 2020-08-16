import axios from 'axios'
import { PROD_BACKEND_API } from '../../constants'

export const FETCH_MENU = "FETCH_MENU"
export const MENU_SUCCESS = "MENU_SUCCESS"
export const MENU_ERROR = "MENU_ERROR"

export const getMenu = (restaurant_id) => dispatch => {
  dispatch({ type: FETCH_MENU });

  axios.get(`${PROD_BACKEND_API}/businesses/${restaurant_id}/menus`)
  .then(({data}) => {
    dispatch({ type: MENU_SUCCESS, payload: data });
  }).catch(error => {
    dispatch({ type: MENU_ERROR, payload: error });
  });
}