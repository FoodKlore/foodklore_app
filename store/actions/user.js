import axios from 'axios'
import { PROD_BACKEND_API } from 'react-native-dotenv'
import { Linking } from 'expo'

export const USER_CREATE_SUCCESS = "USER_CREATE_SUCCESS"
export const USER_FETCH = "USER_FETCH"
export const USER_ERROR = "USER_ERROR"
export const USER_AUTHENTICATED = "USER_AUTHENTICATED"

export const createUser = (email, name, username, nickname, password) => dispatch => {
  dispatch({ type: USER_FETCH });

  const redirectUlr = "exp://192.168.1.176:19000/Account"; // to root

  return axios.post(`${PROD_BACKEND_API}users`, {
    "user": {
      email,
      name,
      username,
      nickname,
      password
    },
    "redirectUrl": {
      path: redirectUlr
    }
  }).then(({data}) => {
    const { id, username, email, nickname, authenticated }  = data;
    dispatch({ type: USER_CREATE_SUCCESS, payload: {
      id,
      username,
      email,
      nickname,
      authenticated,
    }});
    return true;
  }).catch(err => {
    dispatch({ type: USER_ERROR, payload: err.response.data });
    return false;
  });
}

export const checkUserAuthenticated = () => dispatch => {
  dispatch({ type: USER_FETCH });

  // TODO: Hacer el endpoint para ver si el user ha sido authenticado
}