import { combineReducers } from 'redux';
import loginReducer from './components/Login/loginReducer';
import registerReducer from './components/Register/registerReducer';
import scheduleReducer from './components/Schedule/scheduleReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  schedule: scheduleReducer
});
export default rootReducer;
