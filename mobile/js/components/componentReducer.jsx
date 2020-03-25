const defaultState = {
    empty: '',
}

export default function componentReducer(state = defaultState, action) {
    const { type, payload } = action;
    return state;
}