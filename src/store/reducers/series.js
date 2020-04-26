export default (state = {}, action) => {
  switch (action.type) {
    case "GET_SERIES_SUCCESS": {
      const paymentInfo = action.payload;
      return { ...state, user: {...state.user, paymentInfo: {...state.user.paymentInfo, ...action.payload}} };
    }

    default: {
      return state;
    }
  }
};
