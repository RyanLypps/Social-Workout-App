const defaultState = {
  username: '',
  registerEmail: '',
  registerPassword: '',
  confirmedRegisterPassword: '',
  token: ''
}

export default function RegisterReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'HANDLE_USERNAME': {
      return {
        ...state,
        username: payload.username
      }
    }
    
    case 'HANDLE_REGISTER_EMAIL': {
      return {
        ...state,
        registerEmail: payload.email
      }
    }

    case 'HANDLE_REGISTER_PASSWORD': {
      return {
        ...state,
        registerPassword: payload.password
      }
    }

    case 'HANDLE_CONFIRMED_REGISTER_PASSWORD': {
      return {
        ...state,
        confirmedRegisterPassword: payload.confirmedPassword
      }
    }

    case 'HANDLE_CREATE_USER_SUBMIT_FULFILLED': {
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
