import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import history from "./redux/history";
import store from "./store"
import Root from './Root';

const theme = createMuiTheme({});

const App = () =>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <Root/>
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>;

const renderApp = () =>
    render(<App/>, document.getElementById('root'));

renderApp();
