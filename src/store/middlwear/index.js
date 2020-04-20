export const authMidlewear = (store) => (next) => (action) => {
  if (action.type === 'LOGIN') {
    fetch('/auth', {method: 'POST', body: {}}).then((res) => {
      if (res.status === 200) {
        store.dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {login: true}
        })
      } else {
        store.dispatch({
          type: 'LOGIN_FAILURE',
          payload: {login: false}
        })
      }
    })
  }

  next(action);
}
