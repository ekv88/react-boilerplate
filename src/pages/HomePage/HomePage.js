import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Import redux selector and actions
import {doggosActions, doggosSelectors} from "../../redux/doggos";

// Import some custom components from components folder
import { CommonComponent } from "../../components";

const HomePage = ({loadDoggos, doggos, errors, resetError, loading}) => {

    // useEffect - hook that works as "componentDidMount()" to load some doggo images on mount
    useEffect(() => {
        // We create initial load of 3 doggo images
        if(!doggos) loadDoggos(3);
    }, [doggos, loadDoggos]);

    // Button handler for loading more images
    const handleLoadMore = (quantity) => loadDoggos(quantity);

    return (
        <div>
            <Container maxWidth={false}>
                <Typography variant="h3" align="center">Home page</Typography>
                <Typography variant="h6" align="center">⚠ THIS IS WORK IN PROGRESS ⚠</Typography>
            </Container>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    doggos: doggosSelectors.getDoggos(state),
    loading: doggosSelectors.getDoggosLoadingErrors(state),
    errors: doggosSelectors.getDoggosErrors(state),
});

const mapDispatchToProps = dispatch => ({
    loadDoggos: (quantity) => {
        dispatch(doggosActions.loadDoggos(quantity))
    },
    resetError: () => {
        dispatch(doggosActions.resetError())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);