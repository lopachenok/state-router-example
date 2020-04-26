import { takeEvery, call, put, fork } from "redux-saga/effects";
import { getSeriesSuccessAC } from "../actions";
import {getSeriesFromApi} from "../../shared/api";

export function* rootSaga() {
  yield fork(handleSeries);
  yield fork(handleAuth);
}

export function* makeSeriesApiRequest() {
  const result = yield call(getSeriesFromApi);
  yield put(getSeriesSuccessAC(result));
}

export function* handleSeries() {
  yield takeEvery("GET_SERIES", makeSeriesApiRequest);
}

export function* handleAuth() {
  yield takeEvery("LOGIN", function*() {
    yield put({type: "LOGIN_SUCCESS"});
  });
}
