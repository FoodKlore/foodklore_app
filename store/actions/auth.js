import axios from 'axios'
import { BACKEND_API } from '../../constants'
import * as store from 'expo-secure-store'

export const IT_IS_LOGGED_IN = 'IT_IS_LOGGED_IN'
export const AUTH_FETCH = 'AUTH_FETCH'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'


export const isLoggedIn = () => async dispatch => {
    dispatch({ type: AUTH_FETCH })
    try {
        let token = await store.getItemAsync('auth_token')

        axios.post(`${BACKEND_API}/auth/logged_in`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({ data }) => {
            // TODO: Store payload in local Storage
            dispatch({ type: IT_IS_LOGGED_IN })
            return true
        }).catch(async err => {
            console.log(err)
            dispatch({ type: AUTH_ERROR, payload: 'Account not authorized.' })
            await store.deleteItemAsync('auth_token')
            return false
        })

    } catch (error) {
        return dispatch({ type: AUTH_ERROR, payload: 'Not authenticated before'})
    }
}

export const login = (auth_entity) => async dispatch => {
    dispatch({ type: AUTH_FETCH })
    try {
        const { data: { token }} = await axios.post(`${BACKEND_API}/auth/login`, auth_entity)
        await store.setItemAsync('auth_token', token)
        dispatch(isLoggedIn())
    } catch (error) {
        // TODO: Implemente error handling notifying the user
        console.log(error)
        dispatch({ type: AUTH_ERROR })
        return false
    }
}

export const logout = () => async dispatch => {
    try {
        await store.deleteItemAsync('auth_token')
        dispatch({ type: AUTH_LOGOUT })
    } catch (error) {

    }
}