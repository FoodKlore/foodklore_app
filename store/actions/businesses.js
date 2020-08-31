import axios from 'axios'
import { BACKEND_API } from '../../constants'

export const BUSINESSES_SUCCESS = "BUSINESSES_SUCCESS"
export const BUSINESSES_FETCH = "BUSINESSES_FETCH"
export const BUSINESSES_ERROR = "BUSINESSES_ERROR"

export const getBussinesses = () => dispatch => {
  dispatch({ type: BUSINESSES_FETCH });
  axios.get(`${BACKEND_API}/businesses`).then(({data}) => {
    dispatch({ type: BUSINESSES_SUCCESS, payload: data });
  }).catch( error => {
    console.log(error);
    dispatch({ type: BUSINESSES_ERROR, payload: error });
  });
}