import {extractCallFromType} from './Type'

export const doNothing = (state) => {
    if (state === 0) {
        return 0;
    }
    if (!state) return null;
    return state;
};

export const byApiActionForCalls = (CALLS) => (reducer) => (state={}, action) => {
    const apiAction = extractCallFromType(action.type, CALLS);
    if (!apiAction) {
        return state;
    }
    if (state===null || state===undefined) {
        state = {};
    }
    return {...state, [apiAction] : reducer(state[apiAction], action)};
};

export const store = (value) => () => value;

export const storeNull = store(null);

export const storeError = (state, action) => ({...state, error: action.payload});

export default {
    doNothing,
    store,
    storeNull,
    storeError,
    byApiActionForCalls
}