import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import * as api from './redux/api';
import Container from './util/Container';
import reducers from './redux/index'
import createReducer from './redux/reducerInjector';

const configureStore = (initialState = {}, history) => {
    let composeEnhancers = compose;

    /** Import api in container so we can access it much easier later */
    const container = new Container({
        api
    });

    // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    // Add middlewares to store
    const middlewares = [
        thunk.withExtraArgument(container),
        routerMiddleware(history)
    ];

    const enhancers = [applyMiddleware(...middlewares)];

    const injectedReducers = {
        ...reducers,
        // Here we can inject reducers we want to share between projects
    };

    const store = createStore(
        createReducer(injectedReducers),
        initialState,
        composeEnhancers(...enhancers),
    );

    // Extensions
    store.injectedReducers = injectedReducers; // Reducer registry

    // Make reducers hot reloadable
    if (module.hot) {
        module.hot.accept('./redux/reducerInjector', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store;
};

export default configureStore
