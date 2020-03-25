const defaultState = {
  loginEmail: '',
  loginPassword: '',
  token: ''
}

export default function LoginRegisterReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'HANDLE_LOGIN_EMAIL': {
      return {
        ...state,
        loginEmail: payload.email.toLowerCase()
      }
    }

    case 'HANDLE_LOGIN_PASSWORD': {
      return {
        ...state,
        loginPassword: payload.password
      }
    }

    case 'HANDLE_LOGIN_SUBMIT_FULFILLED': {
      return {
        ...state,
        token: payload
      }
    }

    default: {
      return state;
    }
  }  
}
