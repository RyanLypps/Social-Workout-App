const defaultState = {
  loginEmail: '',
  loginPassword: '',
  token: '',
  userId: '',
  customerInfo: {}
}

export default function LoginReducer(state = defaultState, action) {
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
