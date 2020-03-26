import { combineReducers } from 'redux';
import loginReducer from './components/Login/loginReducer';
import registerReducer from './components/Register/registerReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer
});
export default rootReducer;
