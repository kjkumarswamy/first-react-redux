import { combineReducers } from "redux";
import userReducer from './user';
import counterReducer from './counter';


const allReducer = combineReducers({
    counterReducer,
    userReducer
})


export default allReducer


