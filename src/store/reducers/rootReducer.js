//import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import skillReducer from './skillReducer'

const rootReducer = combineReducers({
    //auth: authReducer,
    firebase: firebaseReducer,
    skill: skillReducer
})

export default rootReducer
