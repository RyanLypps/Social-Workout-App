const defaultState = {
  showModal: false,
  modalInfo: [],
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

    case 'HANDLE_PERSONAL_EXP': {
      return {
        ...state,
        modalInfo: { ...state.modalInfo, personalExperience: action.payload },
      }
    }

    case 'HANDLE_PARTNER_EXP': {
      return {
        ...state,
        modalInfo: { ...state.modalInfo, partnerExperience: action.payload },
      }
    }

    case 'HANDLE_START_TIME': {
      return {
        ...state,
        modalInfo: { ...state.modalInfo, startTime: action.payload },
      }
    }

    case 'HANDLE_HOURS_SPENT': {
      return {
        ...state,
        modalInfo: { ...state.modalInfo, hoursSpent: action.payload },
      }
    }

    case 'HANDLE_WORKOUT_DESCRIPTION': {
      return {
        ...state,
        modalInfo: { ...state.modalInfo, workoutDescription: action.payload.desc }
      }
    }


    default: {
      return state;
    }
  }
}
