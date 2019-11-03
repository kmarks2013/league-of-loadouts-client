import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userReducer'
import championReducer from './championReducer'

const reducers = combineReducers({
    user: userReducer,
    champion: championReducer
})

export default createStore(reducers, applyMiddleware(thunk))