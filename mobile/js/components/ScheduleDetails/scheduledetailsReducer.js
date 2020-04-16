const defaultState = {
    showModal: false,
    workoutInfoUser: {}
  }
  
  export default function scheduleDetailsReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'HANDLE_CURRENT_WORKOUT_USER': {
        return {
          ...state,
          workoutInfoUser: { username: payload.username, customerId: payload.customerId },
        }
      }

      case 'HANDLE_SHOW_DETAIL_MODAL': {
        return {
          ...state,
          showModal: payload
        }
      }

      default: {
        return state;
      }
    }
  }
  