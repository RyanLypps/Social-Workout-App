import axios  from 'axios'
import { HOST } from 'react-native-dotenv';

export function handleShowModal(showModal) {
    return {
      type: 'HANDLE_SHOW_MODAL',
      payload: !showModal
    }
  }
export function personalExp(value) {
    return {
      type: 'HANDLE_PERSONAL_EXP',
      payload: value
    }
  }

export function partnerExp(value) {
    return {
      type: 'HANDLE_PARTNER_EXP',
      payload: value
    }
  }
  export function spentHours(value) {
    return {
      type: 'HANDLE_HOURS_SPENT',
      payload: value
    }
  }
export function handleStartTime(hour) {
    return {
      type: 'HANDLE_START_TIME',
      payload: hour
    }
  }

  export function workoutDesc(desc) {
    return {
      type: 'HANDLE_WORKOUT_DESCRIPTION',
      payload: { desc }
    }
  }  

  export function handlePostWorkout(modalInfo) {
    return {
      type: 'HANDLE_WORKOUT_INFO',
      payload: axios.post(`${HOST}/api/WorkoutInfos`, {
        hoursSpent: modalInfo.hoursSpent,
        partnerExperience: modalInfo.partnerExperience,
        personalExperience:  modalInfo.personalExperience,
        startTime: modalInfo.startTime,
        workoutDescription: modalInfo.workoutDescription,
      })
      //  .then(res => console.log(res))
      // .catch(err => console.log(err))
  }  
}
  export function handleGetWorkout(modalInfo) {
    return {
      type: 'HANDLE_GET_WORKOUT_INFO',
      payload: axios.get(`${HOST}/api/WorkoutInfos`)
    }
  }  
 