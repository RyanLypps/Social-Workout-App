export function handleCurrentWorkoutInfoUser(username, customerId) {
    return {
      type: 'HANDLE_CURRENT_WORKOUT_USER',
      payload: { username, customerId }
    }
}

export function handleShowDetailModal(showModal) {
  return {
    type: 'HANDLE_SHOW_DETAIL_MODAL',
    payload: !showModal
    }
}
export function handleMessageInput(message){
  return {
    type: 'HANDLE_MESSAGE_INPUT',
    payload: { message }
  }
}
