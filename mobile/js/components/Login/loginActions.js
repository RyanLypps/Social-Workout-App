import axios from 'axios';
import { HOST } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';

export function handleLoginEmail(email) {
  return {
    type: 'HANDLE_LOGIN_EMAIL',
    payload: { email }
  }
}

export function handleLoginPassword(password) {
  return {
    type: 'HANDLE_LOGIN_PASSWORD',
    payload: { password }
  }
}

export function handleLoginSubmit(email, password) {
  return dispatch => {
    return dispatch({
      type: 'HANDLE_LOGIN_SUBMIT',
      payload: axios.post(`${HOST}/api/Customers/login`, {
        email: email.toLowerCase(),
        password: password
      })
        .then(res => {
          const data = res.data;
          dispatch(getCustomerInfo(data.userId))
          Actions.landingPage()
          return { data }
        })
        .catch(err => alert('Login attempt failed. Wrong username or password.'))
    })
  }
}

function getCustomerInfo(userId) {
  return dispatch => {
    return dispatch({
      type: 'HANDLE_GET_CUSTOMER_INFO',
      payload: axios.get(`${HOST}/api/Customers/${userId}`)
    })
  }
}
