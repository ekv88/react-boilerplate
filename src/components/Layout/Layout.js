import React, { Fragment, Suspense } from 'react';
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
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        height: '100vh',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    container: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4),
    },
    contentContainer: {
        padding: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const Layout = ({menu, main, id}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container direction="row" spacing={0} className={classes.container}>
                <Grid item xl={2} lg={2} md={4} sm={12} xs={12}>
                    <div className={classes.root}>
                        <AppBar position="absolute" className={classes.appBar}>
                            <Toolbar className={classes.toolbar}>
                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    Dashboard
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper}} open>{menu}</Drawer>
                    </div>
                </Grid>
                <Grid item xl={10} lg={10} md={8} sm={12} xs={12} className={classes.contentContainer}>
                    <div className="content-holder" id={id}>
                        <Suspense fallback={null}>{main}</Suspense>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Layout;
