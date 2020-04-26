import { takeEvery, call, put, fork } from "redux-saga/effects";
import { runSaga } from "redux-saga";

import {makeSeriesApiRequest, handleSeries} from "./index";
import * as api from "../../shared/api";
import {getSeriesSuccessAC} from "../actions";

describe('Series saga test', () => {
  const generator = handleSeries();

  it("Should wait for GET_SERIES action", () => {
    const next = generator.next();

    expect(next.value).toEqual(takeEvery("GET_SERIES", makeSeriesApiRequest));
  });

  it('should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('Series saga api test', () => {
  const dummySeries = [{ id: 1, name: 'Episode 1' }];
  const getSeriesMock = jest.spyOn(api, 'getSeriesFromApi').mockImplementation(() => Promise.resolve(dummySeries));

  it("should call api and dispatch success action", async () => {
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({test: '1234'})
    }, makeSeriesApiRequest);

    expect(getSeriesMock).toHaveBeenCalled();
    expect(dispatched[0]).toEqual(getSeriesSuccessAC(dummySeries));
  })
});
