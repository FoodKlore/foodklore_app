import axios from 'axios'
import { PROD_BACKEND_API } from 'react-native-dotenv'
import { Linking } from 'expo'

export const GUEST_SUCCESS = "GUEST_SUCCESS"
export const GUEST_FETCH = "GUEST_FETCH"
export const GUEST_ERROR = "GUEST_ERROR"

export const createGuest = (email, name) => dispatch => {
  dispatch({ type: GUEST_FETCH });

  const redirectUlr = Linking.makeUrl("/Validate Account"); // to root

  return axios.post(`${PROD_BACKEND_API}/guests`, {
    "guest": {
      "email": email,
      "name": name
    },
    "redirectUrl": {
      path: redirectUlr
    }
  }).then(({data}) => {
    const { id, authenticated }  = data;
    dispatch({ type: GUEST_SUCCESS, payload: {
      id,
      authenticated
    }});
    return true;
  }).catch(err => {
    console.log(err);
    dispatch({ type: GUEST_ERROR, payload: err.message });
    return false;
  });
}