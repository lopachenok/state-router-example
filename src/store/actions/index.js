export const loginAC = () => {
  return {
    type: "LOGIN"
  };
};

export const asyncLoginAC = () => (dispatch, getState) => {
  setTimeout(
    () =>
      dispatch({
        type: "LOGIN",
      }),
    5000,
  );
};
