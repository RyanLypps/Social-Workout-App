import axios from 'axios';
import { HOST } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';

export function handleUsername(username) {
  return {
      type: 'HANDLE_USERNAME',
      payload: { username }
  }
}

export function handleRegisterEmail(email) {
    return {
        type: 'HANDLE_REGISTER_EMAIL',
        payload: { email }
    }
}

export function handleRegisterPassword(password) {
    return {
        type: 'HANDLE_REGISTER_PASSWORD',
        payload: { password }
    }
}

export function handleConfirmedRegisterPassword(confirmedPassword) {
    return {
        type: 'HANDLE_CONFIRMED_REGISTER_PASSWORD',
        payload: { confirmedPassword }
    }
}

export function handleRegisterSubmit(username, email, password) {
  return dispatch => {
      return dispatch({
          type: 'HANDLE_CREATE_USER_SUBMIT',
          payload: 
            axios.post(`${HOST}/api/Users`, {
              username: username,
              email: email,
              password: password,
          })
						.then(res => 
              axios.post(`${HOST}/api/Users/login`, {
              	email: email,
              	password: password
            })
            	.then(res => {
                Actions.landingPage()
                return res.data.id
            	})
							.catch(err => alert('Login attempt failed. Wrong username or password.'))
						)
					.catch(err => alert('Oops. Something went wrong.'))
      })
  }
}
