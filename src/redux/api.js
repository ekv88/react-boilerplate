import * as http from '../util/http.js';

/** Make GET request to fetch dog picture. quantity is optional */
export const getDoggos = (quantity) =>
    http.get('api/breed/shiba/images/random' + quantity ? '/' + quantity : '');