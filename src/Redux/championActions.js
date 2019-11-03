const getChampionsAction = champions => ({
    type: "GET_CHAMPIONS",
    payload: champions
})

const fetchChampionsFromDB = () => dispatch => {
    fetch('http://localhost:3000/champions')
    .then(res => res.json())
    .then(champsArr =>{
        dispatch(getChampionsAction(champsArr))
    })
}

export default {
    fetchChampionsFromDB
}