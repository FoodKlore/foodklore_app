import { FETCH_MENU, MENU_ERROR, MENU_SUCCESS } from '../actions/menus'

const initialState = {
  errors: null,
  menu: [],
  isFetching: false
}

export const menus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        isFetching: true
      }
    case MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        menu: action.payload
      }
    case MENU_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}