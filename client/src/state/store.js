import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./products.state.js";
import authReducer from "./auth.state.js"

const reducers = combineReducers({
  product: productReducer,
  auth: authReducer,
});

const store = configureStore({reducer:reducers});

export default store;
