import axios from 'axios';
import config from './../../config';

axios.defaults.baseURL = config.baseurl;
axios.defaults.headers.common.Authorization = localStorage.getItem('inhatimeAuthToken') ? `Bearer ${localStorage.getItem('inhatimeAuthToken')}` : null;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const parseJSON = (res) => {
  return Promise.resolve(res.data);
};

export const httpPost = (url, data) => {
  const body = data;
  axios.defaults.headers.common.Authorization = localStorage.getItem('inhatimeAuthToken') ? `Bearer ${localStorage.getItem('inhatimeAuthToken')}` : null;
  return axios.post(url, body)
    .then(checkStatus)
    .then(parseJSON);
};


export const httpPut = (url, data) => {
  const body = data;
  axios.defaults.headers.common.Authorization = localStorage.getItem('inhatimeAuthToken') ? `Bearer ${localStorage.getItem('inhatimeAuthToken')}` : null;
  return axios.put(url, body)
    .then(checkStatus)
    .then(parseJSON);
};


export const httpGet = (url, params) => {
  axios.defaults.headers.common.Authorization = localStorage.getItem('inhatimeAuthToken') ? `Bearer ${localStorage.getItem('inhatimeAuthToken')}` : null;
  return axios.get(url)
    .then(checkStatus)
    .then(parseJSON);
};
