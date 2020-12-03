import axios from 'axios'
import { BACKEND_API, FK_SCHEMA } from '../../constants'

export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const USER_FETCH = 'USER_FETCH'
export const USER_ERROR = 'USER_ERROR'
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED'
export const USER_CONFIRM_ACCOUNT = 'USER_CONFIRM_ACCOUNT'
export const USER_CONFIRMED_ACCOUNT_SUCCESS =
    'USER_CONFIRMED_ACCOUNT_SUCCESS'
export const USER_CONFIRMED_ACCOUNT_FAILURE =
    'USER_CONFIRMED_ACCOUNT_FAILURE'

export const createUser = (email, name, username, nickname, password) => dispatch => {
    dispatch({ type: USER_FETCH })

    return axios.post(`${BACKEND_API}/users`, {
        'user': {
            email,
            name,
            username,
            nickname,
            password
        },
        'redirectUrl': {
            path: `${FK_SCHEMA}/validate`
        }
    }).then(({data}) => {
        const { id, username, email, nickname, authenticated }  = data
        dispatch({ type: USER_CREATE_SUCCESS, payload: {
            id,
            username,
            email,
            nickname,
            authenticated,
        }})
        return true
    }).catch(err => {
        console.log(err)
        dispatch({ type: USER_ERROR, payload: err })
        return false
    })
}

export const checkUserAuthenticated = () => dispatch => {
    dispatch({ type: USER_FETCH })

    // TODO: Hacer el endpoint para ver si el user ha sido authenticado
}

export const confirmUserAccount = (token) => async (dispatch) => {
    dispatch({ type: USER_CONFIRM_ACCOUNT })
    try {
        let { data } = await axios.get(`${BACKEND_API}/authenticate/user/${token}`)
        dispatch({ type: USER_CONFIRMED_ACCOUNT_SUCCESS })
        return data
    } catch (error) {
        console.log(error)
        dispatch({ type: USER_CONFIRMED_ACCOUNT_FAILURE, payload: 'Error' })
    }
}
