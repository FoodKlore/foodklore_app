import axios from 'axios'
import { BACKEND_API, FK_SCHEMA } from '../../constants'
// import { Linking } from 'expo'

export const GUEST_SUCCESS = "GUEST_SUCCESS"
export const GUEST_FETCH = "GUEST_FETCH"
export const GUEST_ERROR = "GUEST_ERROR"
export const GUEST_CONFIRM_ACCOUNT = "GUEST_CONFIRM_ACCOUNT"
export const GUEST_CONFIRMED_ACCOUNT_SUCCESS = "GUEST_CONFIRMED_ACCOUNT_SUCCESS"
export const GUEST_CONFIRMED_ACCOUNT_FAILURE = "GUEST_CONFIRMED_ACCOUNT_FAILURE"

export const createGuest = (email, name) => dispatch => {
  dispatch({ type: GUEST_FETCH });
  // TODO: Fix this with react native
  // const redirectUlr = Linking.makeUrl("/Validate Account"); // to root
  return axios.post(`${BACKEND_API}/guests`, {
    "guest": {
      "email": email,
      "name": name
    },
    "redirectUrl": {
      path: `${FK_SCHEMA}/validate/guest`
    }
  }).then(({data}) => {
    const { id, authenticated }  = data;
    dispatch({ type: GUEST_SUCCESS, payload: {
      id,
      authenticated
    }});
    return true;
  }).catch(err => {
    console.log(err.message);
    dispatch({ type: GUEST_ERROR, payload: err.message });
    return false;
  });
}

export const confirmGuestAccount = (token) => async dispatch => {
  dispatch({ type: GUEST_CONFIRM_ACCOUNT });

  try {
    let { data } = await axios.get(`${BACKEND_API}/authenticate/guest/${token}`);
    dispatch({ type: GUEST_CONFIRMED_ACCOUNT_SUCCESS });
    return data
  } catch (error) {
    console.log(error);
    dispatch({ type: GUEST_CONFIRMED_ACCOUNT_FAILURE, payload: "Error"});
  }
}