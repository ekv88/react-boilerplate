import {withType} from '../../util/util';
import * as TYPES from './types';

const loadDoggos = (quantity = 1) => (dispatch, getState, container) => {
    const meta = {}; // Additional data if we need to append
    dispatch(withType(TYPES.GET_DOGGOS_IMAGES, {payload: meta}));
    return container.api.getDoggos(quantity).then(response => {
        dispatch(withType(TYPES.GET_DOGGOS_IMAGES_SUCCESS, {payload: response, meta:meta}));
    }).catch(error => {
        dispatch(withType(TYPES.GET_DOGGOS_IMAGES_FAIL, {error: error}));
    });
};

const resetError = () => (dispatch) => {
    dispatch(withType(TYPES.RESET_ERROR), {error: null});
};

export default {
    loadDoggos,
    resetError
};
