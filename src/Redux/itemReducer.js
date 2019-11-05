const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_ITEMS':
        console.log(payload)
        return payload

    default:
        return state
    }
}
