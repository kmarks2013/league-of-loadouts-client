// const initialState = 1

export default (state = 1, { type }) => {
    switch (type) {
    case "INCREASE_LEVEL": 
        console.log(state)
        return state + 1
    case "DECREASE_LEVEL": 
        return state - 1
    default:
        return state
    }
}

