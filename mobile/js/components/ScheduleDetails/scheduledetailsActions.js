export function handleCurrentWorkoutInfoUser(username, customerId, showDetailModal) {
  return dispatch => {
    console.log(username, customerId)
    return {
    type: 'HANDLE_CURRENT_WORKOUT_USER',
    payload: {username, customerId },
    dispatch: dispatch(handleShowDetailModal(showDetailModal))
    }
  }
}

export function handleShowDetailModal(showModal) {
  return {
    type: 'HANDLE_SHOW_DETAIL_MODAL',
    payload: !showModal
    }
}
