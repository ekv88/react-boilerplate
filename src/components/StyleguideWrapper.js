import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as api from '../redux/api';
import history from "../redux/history";
import store from "../store"
import { CommonComponent, Layout, SideMenu } from './index';
// import i18n from './i18n/i18n.js'
// import {I18nextProvider} from 'react-i18next';

// Import component as global components in styleguide
global.CommonComponent = CommonComponent;
global.Layout = Layout;
global.SideMenu = SideMenu;
global.api = api;

const theme = createMuiTheme({});

const StyleguideWrapper = ({children}) =>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                {children}
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>;

export default StyleguideWrapper;
