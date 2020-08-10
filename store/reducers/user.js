import { USER_ERROR, USER_FETCH, USER_CREATE_SUCCESS, USER_AUTHENTICATED } from "../actions/user";

const initialState = {
  id: null,
  username: null,
  email: null,
  nickname: null,
  authenticated: false,
  error: null,
  isFetching: null,
  authenticated: null
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        isFetching: true
      }
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        nickname: action.payload.nickname,
        email: action.payload.email,
        authenticated: action.payload.authenticated,
        isFetching: false
      }
    case USER_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload.authenticated,
        isFetching: false
      }
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}