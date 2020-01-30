const initialState =  []

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case 'ALL_USERS':
        console.log(payload)
        return payload
    default:
        return state
    }
}
