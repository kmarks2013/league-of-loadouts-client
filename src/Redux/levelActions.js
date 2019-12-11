const increaseLevelAction = () => ({type: "INCREASE_LEVEL"})
const decreaseLevelAction = () => ({type: "DECREASE_LEVEL"})

const addLevel = () => dispatch => {
    console.log('action hit')
    dispatch(increaseLevelAction())
}

const subtractLevel = () => dispatch => {
    dispatch(decreaseLevelAction())
}

export default {
    addLevel,
    subtractLevel
}