import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counterReducer';

export default combineReducers({
    router: routerReducer,
    counterReducer
})
