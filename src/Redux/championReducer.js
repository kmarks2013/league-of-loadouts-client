const initialState =  []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_CHAMPIONS':
        return payload
    default:
        return state
    }
}
