export function handleShowModal(showModal) {
    return {
      type: 'HANDLE_SHOW_MODAL',
      payload: !showModal
    }
  }
export function levelOfExp(value) {
    return {
      type: 'HANDLE_LEVEL_OF_EXP',
      payload: [...value]
    }
  }
