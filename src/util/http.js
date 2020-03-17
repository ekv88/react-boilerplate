import axios from 'axios';
import {detectIE} from './util';

/** Prepare header as layer of control */
export const getHeaders = (method) => {
    /** Append header */
    let headers = {
        Authorization: 'Bearer <<access_token>>'
    };

    if (method === 'post' || method === 'put')
        headers['Content-Type'] = 'application/json';

    /** Deal with IE aggressive caching
    http://stackoverflow.com/questions/2848945/prevent-ie-caching */
    if (detectIE() && method === 'get') {
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        headers['Pragma'] = 'no-cache';
        headers['Expires'] = '0';
    }

    return headers;
};

/** Parse error response */
export const getError = (res) => {
    let err = null;
    let response = res.response;
    if (response && response.data) {
        err = response.data;
    } else if (response) {
        err = new Error(response.statusText);
        err.status = response.status;
    } else {
        err = new Error(res || 'HTTP Error');
        err.status = 0;
    }
    return err;
};

/** Wrap every request for additional layer of control */
export const request = (opts, responseSelector) => {
    opts.method = opts.method || 'get';
    opts.headers = getHeaders(opts.method);

    return axios(opts)
        .then(res => {
            //console.log('HTTP ', `${opts.method.toUpperCase()} ${opts.url}: `, res);
            return responseSelector(res);
        })
        .catch(res => {
            let err = getError(res);
            console.log('HTTP ', `${opts.method} ${opts.url}: `, err, res);
            throw err;
        });
};

const dataResponseSelector = res => res.data;

/** Export wrapped RESTful methods */
export const get = (url, params) => request({url, params}, dataResponseSelector);
export const post = (url, data) => request({method: 'post', url, data}, dataResponseSelector);
export const put = (url, data) => request({method: 'put', url, data}, dataResponseSelector);
export const patch = (url, data) => request({method: 'patch', url, data}, dataResponseSelector);
export const remove = (url, data) => request({method: 'delete', url, data}, dataResponseSelector);

