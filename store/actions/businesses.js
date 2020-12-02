import axios from 'axios'
import { BACKEND_API } from '../../constants'

export const BUSINESSES_SUCCESS = 'BUSINESSES_SUCCESS'
export const BUSINESSES_FETCH = 'BUSINESSES_FETCH'
export const BUSINESSES_ERROR = 'BUSINESSES_ERROR'

export const getBussinesses = () => dispatch => {
    console.log('HERE IT IS THEN?')
    dispatch({ type: BUSINESSES_FETCH })
    axios.get(`${BACKEND_API}/businesses`).then(({ data }) => {
        dispatch({ type: BUSINESSES_SUCCESS, payload: data })
        return true
    }).catch(error => {
        console.log(error)
        dispatch({ type: BUSINESSES_ERROR, payload: error })
        return false
    }).finally((statement) => {
        console.log('Return', statement)
    })
}