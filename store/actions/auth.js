import axios from "axios";
import { PROD_BACKEND_API } from "react-native-dotenv";

export const AUTH_IS_LOGGED_IN = "AUTH_IS_LOGGED_IN"
export const AUTH_FETCH = "AUTH_FETCH"
export const AUTH_ERROR = "AUTH_ERROR"

import * as SecureStore from 'expo-secure-store'

export const isLoggedIn = (total, shoppingcart_id) => dispatch => {
  dispatch({ type: AUTH_FETCH });
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoX2VudGl0eV9pZCI6NiwiZW50aXR5IjoiR3Vlc3QiLCJleHAiOjE1OTQ3NzAzNzF9.wrG07tC38_G2lc41Wh3H7CJyo3UFqJnOnVWDgAV0eys' // TODO: Get content from the local storage
  axios.post(`${PROD_BACKEND_API}/auth/logged_in`, {
    total,
    shoppingcart_id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(({data}) => {
    // TODO: Store payload in local Storage
    dispatch({ type: AUTH_FETCH });
    return true
  }).catch(err => {
    console.log(err);
    dispatch({ type: AUTH_ERROR, payload: "Account not authorized." });
    return false
  });
}

export const authenticate = (auth_entity) => async dispatch => {
  dispatch({ type: AUTH_FETCH });

  try {
    const { token } = await axios.post(`${PROD_BACKEND_API}/auth/login`, {
      auth_entity
    });
    await SecureStore.setItemAsync('entity_token', token);
  } catch (error) {
    return false
  }
}