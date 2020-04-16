const defaultState = {
  username: '',
  registerEmail: '',
  registerPassword: '',
  confirmedRegisterPassword: '',
  token: '',
  userId: '',
  customerInfo: {}
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
        token: payload.data.id,
        userId: payload.data.userId
      }
    }

    case 'HANDLE_GET_CUSTOMER_INFO_FULFILLED': {
      return {
        ...state,
        customerInfo: payload.data
      }
    }

    case 'HANDLE_GET_CUSTOMER_INFO_REJECTED': {
      return console.log('rejected reducer hit')
    }

    default: {
      return state;
    }
  }  
}
