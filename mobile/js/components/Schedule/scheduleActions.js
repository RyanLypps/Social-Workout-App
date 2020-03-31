export function handleShowModal(showModal) {
    return {
      type: 'HANDLE_SHOW_MODAL',
      payload: !showModal
    }
  }
