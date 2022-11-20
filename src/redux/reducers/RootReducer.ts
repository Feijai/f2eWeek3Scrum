import { combineReducers } from 'redux'
import PBarReducer from './PBarReducer'


const RootReducer = combineReducers({
    pBarReducer:PBarReducer
})

export default RootReducer
