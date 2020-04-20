import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import auth from "./reducers/auth";

export default createStore(combineReducers({ auth }), {}, composeWithDevTools(applyMiddleware(thunk)));
