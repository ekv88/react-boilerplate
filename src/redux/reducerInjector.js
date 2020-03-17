import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';

/** Inject dynamic and hard code architectural reducers **/
const createReducer = (injectedReducers = {}) =>
    combineReducers({
        router: connectRouter(history),
        ...injectedReducers,
    });

export default createReducer;
