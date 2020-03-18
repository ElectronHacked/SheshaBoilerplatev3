import axios from 'axios';
import qs from 'qs';

export const makeGetRequest = (url: string) =>
  axios
    .get(url)
    .then(response => response)
    .catch(error => error.response);

export const makePostRequest = (url: string, payload: any = undefined) => {
  return axios
    .post(url, qs.stringify(payload), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded, application/json',
        // 'content-type': 'application/x-www-form-urlencoded',
      },
    })
    .then(response => response)
    .catch(error => error.response);
};

export const makePutRequest = (url: string, payload: any) =>
  axios
    .post(url, qs.stringify(payload))
    .then(response => response)
    .catch(error => error.response);

export const makeDeleteRequest = (url: string) =>
  axios
    .post(url)
    .then(response => response)
    .catch(error => error.response);

export const querifyPayloadObject = (payload: any) => {
  const result = {};

  Object.keys(payload).forEach(key => {
    result[`query.${key}`] = payload[key];
  });

  return result;
};
