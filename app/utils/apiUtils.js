'use strict';

import request from 'superagent';
import { Promise } from 'es6-promise';
const timeout = 10000;

const makeCall = (method, url, params = {}) => {
  let req = request[method](url)
    .set('Accept', 'application/json')
    .timeout(timeout);

  if(method === 'get') {
    req.type('json')
      .query(params);
  } else {
    req.send(params);
  }

  return new Promise((resolve, reject) => {
    req.end((err, res) => {
      if(err) {
        reject(err);
      } else if(res.status === 400) {
        reject(err);
      } else if (!res.ok) {
        reject(err);
      } else {
        resolve(res.body);
      }
    })
  });
}


export default {
  get(url, data) {
    return makeCall('get', url, data);
  },

  post(url, data) {
    return makeCall('post', url, data);
  },

  put(url, data) {
    return makeCall('put', url, data);
  },

  patch(url, data) {
    return makeCall('patch', url, data);
  },

  delete(url, data) {
    return makeCall('del', url, data);
  }
}