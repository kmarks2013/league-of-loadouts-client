import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userReducer'
import championReducer from './championReducer'
import itemReducer from './itemReducer'
import loadoutReducer from './loadoutReducer'
import levelReducer from './levelReducer'

const reducers = combineReducers({
    user: userReducer,
    champions: championReducer,
    items: itemReducer,
    loadouts: loadoutReducer,
    level: levelReducer
})

export default createStore(reducers, applyMiddleware(thunk))