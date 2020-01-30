const initialState =  []

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case 'GET_USERS':
        return payload
    default:
        return state
    }
}
