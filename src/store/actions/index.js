export const loginAC = () => {
  return {
    type: "LOGIN",
  };
};

export const getSeriesAC = () => {
  return {
    type: "GET_SERIES",
  };
};

export const getSeriesSuccessAC = payload => {
  return {
    type: "GET_SERIES_SUCCESS",
    payload,
  };
};
