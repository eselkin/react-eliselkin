// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import filter from "./filter"
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  filter
})
export default createRootReducer