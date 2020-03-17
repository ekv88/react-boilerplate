import TYPES, {CALLS} from './types';
import {combineReducers} from 'redux';
import {extractCallFromType} from '../../util/Type';
import {byApiActionForCalls, doNothing, store } from '../../util/Redux';

const INITIAL_STATE = {
    images: null,
    loading: false,
    errors: {},
};

const byApiAction = byApiActionForCalls(CALLS);

const startLoadingAndRemoveErrorForApiAction = combineReducers({
    images: doNothing,
    loading: (state = {}, action) =>
        ({...state, [extractCallFromType(action.type, CALLS)]: true }),
    errors: doNothing,
});

const stopLoadingAndStoreErrorForApiAction = combineReducers({
    images: doNothing,
    loading: byApiAction(store(false)),
    errors: (state = {}, action) =>
        !action || !action.error ? state : {...state, [extractCallFromType(action.type, CALLS)]: action.error}
});

const HANDLERS = {
    [TYPES.GET_DOGGOS_IMAGES]: startLoadingAndRemoveErrorForApiAction,
    [TYPES.GET_DOGGOS_IMAGES_FAIL]: stopLoadingAndStoreErrorForApiAction,
    [TYPES.GET_DOGGOS_IMAGES_SUCCESS]: combineReducers({
        movies: (state = [], action) =>
            !action || !action.payload || !action.payload.results ? [] : action.payload.results,
        pagination: (state = [], action) =>
            !action || !action.payload || !action.payload.results ? { page: 0, total_pages: 0 } : { page: action.payload.page, total_pages: action.payload.total_pages },
        genres: doNothing,
        favorites: doNothing,
        watchList: doNothing,
        loading: byApiAction(store(false)),
        errors: doNothing,
    }),
    [TYPES.RESET_ERROR]: combineReducers({
        movies: doNothing,
        genres: doNothing,
        pagination: doNothing,
        favorites: doNothing,
        watchList: doNothing,
        loading: byApiAction(store(false)),
        errors: (state = [], action) => null
    })
};

export default (state = INITIAL_STATE, action = {}) =>
    !HANDLERS[action.type] ? state : HANDLERS[action.type](state, action)
