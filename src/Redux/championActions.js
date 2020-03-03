const getChampionsAction = champions => ({
    type: "GET_CHAMPIONS",
    payload: champions
})

const fetchChampionsFromDB = () => dispatch => {
    fetch('https://league-of-loadouts.herokuapp.com/champions')
    .then(res => res.json())
    .then(champsArr =>{
        dispatch(getChampionsAction(champsArr))
    })
}

export default {
    fetchChampionsFromDB
}