const defaultState = {
    showModal: false,
  }
  
  export default function scheduleReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'HANDLE_SHOW_MODAL': {
        return {
          ...state,
          showModal: payload,
        }
      }
  
      default: {
        return state;
      }
    }  
  }
  