import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
    cartState: cartReducer,
    productState: productReducer,
});

export default rootReducer;
