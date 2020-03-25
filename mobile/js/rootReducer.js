import { combineReducers } from 'redux';
import loginRegisterReducer from './components/LoginRegister/loginRegisterReducer';

const rootReducer = combineReducers({
  loginRegister: loginRegisterReducer
});
export default rootReducer;
