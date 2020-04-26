import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";

import auth from "./reducers/auth";
import series from "./reducers/series";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleWare();
export default createStore(combineReducers({ auth, series }), {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
