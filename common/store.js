import { createStore, combineReducers } from '../libs/redux'
import reducers from '../reducers/index'

export default createStore(combineReducers(reducers))