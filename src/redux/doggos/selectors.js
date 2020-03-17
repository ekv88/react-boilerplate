import {createSelector} from "reselect";
import {CALLS} from "./types";

const extractDoggosImages = (state) => state.doggos.images ? state.doggos.images : null;
const extractLoadings = (state) => state.doggos.loading ? state.doggos.loading : null;
const extractErrors = (state) => state.doggos.errors ? state.doggos.errors : null;

const getMoviesSearchResults = createSelector(
    extractDoggosImages,
    (images) => images ? images : []
);

const getDoggosErrors = createSelector(
    extractErrors,
    (errors) => !errors ? null : errors[CALLS.GET_DOGGOS_IMAGES]
);

const getDoggosLoadingErrors = createSelector(
    extractLoadings,
    (loadings) => !loadings ? null : loadings[CALLS.GET_DOGGOS_IMAGES]
);

export default {
    getMoviesSearchResults,
    getDoggosErrors,
    getDoggosLoadingErrors,
}
