const url= 'http://localhost:3000/loadouts'


const getLoadoutsAction = loadouts => ({
    type: "GET_LOADOUTS",
    payload: loadouts
})

const createNewLoadout = loadout => ({
    type: "CREATE_LOADOUT",
    payload: loadout
})


const deleteLoadoutAction = loadoutId => ({
    type: "DELETE_LOADOUT",
    payload: loadoutId
})

const clearLoadouts = () => dispatch => dispatch({
    type: 'CLEAR_LOADOUTS'
})

const updateLoadoutAction = loadout => ({
    type: "UPDATE_LOADOUT",
    payload: loadout
})

const setLoadoutAction = loadout => ({
    type: 'SET_LOADOUT',
    payload:loadout
})
 

const fetchLoadoutsFromDB = () => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(laodoutsArr =>{
        dispatch(getLoadoutsAction(laodoutsArr))
    })
}

const newLoadoutPost = (newLoadout) => dispatch => {  
        dispatch(createNewLoadout(newLoadout)) 
}

const updateLoadoutFromDB = (loadout, payload) => dispatch => {
    fetch(url + `/${loadout.id}`, {
        method: 'PATCH',
        headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(updatedLoadout => {
        dispatch(updateLoadoutAction(updatedLoadout))
    })
}

const deleteLoadoutFromDB = loadoutId => dispatch => {
    // dispatch(deleteLoadoutAction(loadoutId))
    fetch(url + `/${loadoutId}`, {
      method: 'DELETE'
    }).then(res => res.json())
    .then(() => dispatch(deleteLoadoutAction(loadoutId)));
  };

// const fecthLoadout = () => dispatch => {
//     fetch('url ')
// }
const getLoadoutItems = (loadout) => dispatch => {
     dispatch(updateLoadoutAction(loadout))
}
 
 

export default {
    fetchLoadoutsFromDB,
    newLoadoutPost,
    clearLoadouts,
    getLoadoutItems,
    createNewLoadout,
    deleteLoadoutFromDB,
    updateLoadoutFromDB
}
