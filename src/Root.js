import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/***** Components *****/
import { Layout, SideMenu } from './components';

/***** Pages *****/
const HomePage = lazy(() => import('./pages/HomePage/HomePage.js'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage.js'));

/*** Utils pages ***/
const ErrorPage = lazy(() => import('./pages/UtilPages/ErrorPage.js'));

const Root = () =>
    <BrowserRouter basename="/">
        <Switch>
            <Redirect exact from='/' to='/home'/>

            <Route exact path='/home' render={props => <Layout main={<HomePage/>} menu={<SideMenu active="home"/>} {...props}/>}/>
            <Route exact path='/about' render={props => <Layout main={<AboutPage/>} menu={<SideMenu active="about"/>} {...props}/>}/>

            <Route render={props => <Layout main={<ErrorPage code={404}/>} {...props}/>}/>
        </Switch>
    </BrowserRouter>

export default Root;
