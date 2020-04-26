import {stringify} from 'qs';

export const getSeriesFromApi = () => fetch("http://api.tvmaze.com/shows/180/episodes").then(response => response.json());

export const requestHelper = (method, url, param) => {
  const { body, qs, headers, token } = param || {};
  const opts = {
    method,
    headers: {...headers, 'content-type': 'application/json'}
  };

  if (body) {
    param.body = body;
  }

  if (token) {
    param.body.token = token;
  }

  return fetch(url + qs ? `?${stringify(qs)}` : '', opts).then(res => {
    if (res.success === true) {
      return res.data;
    }

    return Promise.reject({code: res.statusCode, message: res.message});
  })
};
