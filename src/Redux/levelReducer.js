
export default (state = {level:1}, { type }) => {
    switch (type) {
    case "INCREASE_LEVEL": 
        return{...state, level: state.level + 1}
    case "DECREASE_LEVEL": 
        return{...state, level: state.level - 1}
    default:
        return state
    }
}
