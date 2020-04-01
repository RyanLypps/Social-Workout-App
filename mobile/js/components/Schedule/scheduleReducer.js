const defaultState = {
    showModal: false,
    data: [{
      value: 'Beginner',
    }, {
      value: 'Moderate',
    }, {
      value: 'High',
    }],
    levelOfExpValue: [],
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
      case 'HANDLE_LEVEL_OF_EXP': {
        return {
          ...state,
          levelOfExpValue: [...state.levelOfExpValue, action.payload],
        }
      }
  
      default: {
        return state;
      }
    }  
  }
  