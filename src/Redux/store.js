import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// const reducers = combineReducers({
//     user: userReducer,
//     champion: championReducer
// })

export default createStore(reducer, applyMiddleware(thunk))