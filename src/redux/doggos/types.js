export const createFromCall = (call, suffix) => call + '_' + suffix;

const PREFIX = 'doggos/';

export const CALLS = {
    GET_DOGGOS_IMAGES: PREFIX + 'GET_DOGGOS_IMAGES',
};

export const GET_DOGGOS_IMAGES = CALLS.GET_DOGGOS_IMAGES;
export const GET_DOGGOS_IMAGES_SUCCESS = createFromCall(CALLS.GET_DOGGOS_IMAGES, 'SUCCESS');
export const GET_DOGGOS_IMAGES_FAIL = createFromCall(CALLS.GET_DOGGOS_IMAGES, 'FAIL');

/** App handlers */
export const RESET_ERROR = PREFIX + 'RESET_ERROR';

export default {
    GET_DOGGOS_IMAGES: GET_DOGGOS_IMAGES,
    GET_DOGGOS_IMAGES_SUCCESS: GET_DOGGOS_IMAGES_SUCCESS,
    GET_DOGGOS_IMAGES_FAIL: GET_DOGGOS_IMAGES_FAIL,
    RESET_ERROR: RESET_ERROR,
};
