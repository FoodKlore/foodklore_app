import axios from 'axios'
import { BACKEND_API } from 'react-native-dotenv'

export const GUEST_SUCCESS = "GUEST_SUCCESS"
export const GUEST_FETCH = "GUEST_FETCH"
export const GUEST_ERROR = "GUEST_ERROR"

export const createGuest = (email, name) => dispatch => {
  dispatch({ type: GUEST_FETCH });

  return axios.post(`${BACKEND_API}/guests`, {
    "guest": {
      "email": email,
      "name": name
    }
  }).then(({data}) => {
    const { id, authenticated }  = data;
    dispatch({ type: GUEST_SUCCESS, payload: {
      id,
      authenticated
    }});
    return true;
  }).catch(err => {
    dispatch({ type: GUEST_ERROR, payload: err.message });
    return false;
  });
}