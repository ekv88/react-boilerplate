import history from "./redux/history";
import configureStore from './configureStore';
const store = configureStore({}, history);
export default store;
