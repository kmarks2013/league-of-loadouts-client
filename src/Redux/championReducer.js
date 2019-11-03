const initialState =  []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_CHAMPIONS':
        console.log(payload)
        return payload
    default:
        return state
    }
}
