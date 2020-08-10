import { combineReducers } from 'redux'
import { orders } from './orders'
import { shoppingCart } from './shoppingCart'
import { businesses } from './businesses'
import { menus } from './menus'
import { guest } from './guest'
import { auth } from './auth'
import { user } from './user'

export default combineReducers({
  orders,
  shoppingCart,
  businesses,
  menus,
  guest,
  auth,
  user
})