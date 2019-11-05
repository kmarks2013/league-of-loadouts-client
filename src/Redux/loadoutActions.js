const url= 'http://localhost:3000/loadouts'


const getLoadoutsAction = loadouts => ({
    type: "GET_LOADOUTS",
    payload: loadouts
})

const createNewLoadout = loadout => ({
    type: "CREATE_LOADOUT",
    payload: loadout
})

const loadoutAction = loadout => ({
    type: "LOADOUT",
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
    fetch(url)

    .then(res => res.json())
    .then(laodoutsArr =>{
        dispatch(getLoadoutsAction(laodoutsArr))
    })
}

// const fecthLoadout = () => dispatch => {
//     fetch('url ')
// }
const getLoadout = (loadoutObj) => dispatch => {
    dispatch(loadoutAction(loadoutObj))
}
 

const newLoadoutPost = (loadoutData) => dispatch => {
    fetch(url ,{
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
    newLoadoutPost,
    getLoadout 
}
