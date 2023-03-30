import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    isLoggedIn: amountReducer
})

export default reducers;