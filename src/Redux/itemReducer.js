const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_ITEMS':
        return payload

    default:
        return state
    }
}
