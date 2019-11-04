const getLoadoutsAction = loadouts => ({
    type: "GET_LOADOUTS",
    payload: loadouts
})

const createNewLoadout = loadout => ({
    type: "CREATE_LOADOUT",
    payload: loadout
})

// const createLoadoutAction = loadout => ({
//     type: "CREATE_LOADOUTS",
//     payload: loadout
// })

// const deleteLoadoutAction = loadoutId => ({
//     type: "DELETE_LOADOUTS",
//     payload: loadoutId
// })

// const updateLoadoutsAction = loadout => ({
//     type: "UPDATE_LOADOUTS",
//     payload: loadout
// })


const fetchLoadoutsFromDB = () => dispatch => {
    fetch('http://localhost:3000/loadouts')

    .then(res => res.json())
    .then(laodoutsArr =>{
        dispatch(getLoadoutsAction(laodoutsArr))
    })
}

const newLoadoutPost = (loadoutData) => dispatch => {
    fetch('http://localhost:3000/loadouts' ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Application: 'application/json'
        },
        body: JSON.stringify(loadoutData)
    })
    .then(res => res.json())
    .then(newLoadout => {
        dispatch(createNewLoadout(newLoadout))
    })
}

export default {
    fetchLoadoutsFromDB,
    newLoadoutPost 
}
