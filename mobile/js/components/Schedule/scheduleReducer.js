const defaultState = {
    modalVisable: false,
  }
  
  export default function scheduleReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'HANDLE_MODAL_VISABILITY_SHOW': {
        return {
          ...state,
          modalVisable: true,
        }
      }
      case 'HANDLE_MODAL_VISABILITY_HIDE': {
        return {
          ...state,
          modalVisable: false,
        }
      }
  
      default: {
        return state;
      }
    }  
  }
  