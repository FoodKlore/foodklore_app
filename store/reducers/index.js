import { combineReducers } from 'redux'
import { orders } from './orders'
import { shoppingCart } from './shoppingCart'

export default combineReducers({
  orders,
  shoppingCart
})