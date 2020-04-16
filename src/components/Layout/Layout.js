import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./layout.scss"

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        boxShadow: '0px 0px 0px transparent'
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        height: '100vh',
    },
}));

const Layout = ({menu, main, id, pageName}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>{pageName}</Typography>
                </Toolbar>
            </AppBar>
            <Grid container id={id}>
                <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
                    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper}}>{menu}</Drawer>
                </Grid>
                <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
                    <Suspense fallback={null}>{main}</Suspense>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Layout.propTypes = {
    // Main element to render
    main: PropTypes.any,
    // Menu element to render on left side
    menu: PropTypes.any,
    // Id of page
    id: PropTypes.string,
};

export default Layout;
