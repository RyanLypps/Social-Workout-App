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
            payload: axios.post(`${HOST}/api/Users/login`, {
                email: email.toLowerCase(),
                password: password
            })
            .then(res => {
                Actions.landingPage()
                return res.data.id
            })
            .catch(err => alert('Login attempt failed. Wrong username or password.'))
        })
    }
}
