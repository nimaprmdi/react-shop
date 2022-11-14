import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
