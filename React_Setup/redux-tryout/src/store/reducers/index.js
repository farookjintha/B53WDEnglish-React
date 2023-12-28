import { combineReducers } from "redux";
import countReducer from "./countReducers";
import productReducer from "./productReducers";
import userReducer from "./userReducers";
import cartReducer from "./cartReducers";

const allReducers = combineReducers({
    count: countReducer,
    // products: productReducer,
    // users: userReducer,
    // cart: cartReducer
});


export default allReducers;