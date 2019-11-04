import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userReducer'
import championReducer from './championReducer'
import itemReducer from './itemReducer'

const reducers = combineReducers({
    user: userReducer,
    champions: championReducer,
    items: itemReducer
})

export default createStore(reducers, applyMiddleware(thunk))