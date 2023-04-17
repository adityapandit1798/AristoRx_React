import { combineReducers } from "redux";
import LoginUser from "./LoginUser";

const LoginData = combineReducers({
    isLoggedIn: LoginUser
})

export default LoginData;