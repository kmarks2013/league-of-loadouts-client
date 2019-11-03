import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userReducer'

// const reducers = combineReducers({
//     user: userReducer,
//     champion: championReducer
// })

export default createStore(userReducer, applyMiddleware(thunk))