import { combineReducers } from 'redux';
import componentReducer from './components/componentReducer';

const rootReducer = combineReducers({
    empty: componentReducer,
});
export default rootReducer;
