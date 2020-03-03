const url= 'https://league-of-loadouts.herokuapp.com/loadouts'


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

const updateLoadoutAction = loadout => ({
    type: "UPDATE_LOADOUT",
    payload: loadout
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
    fetch(url + `/${loadoutId}`, {
      method: 'DELETE'
    }).then(console.log('I deleted a laodout'))
    .then(() => {return dispatch(deleteLoadoutAction(loadoutId))});
    // dispatch(deleteLoadoutAction(loadoutId))
  };

const getLoadoutItems = (loadout) => dispatch => {
     dispatch(updateLoadoutAction(loadout))
}
 
 

export default {
    fetchLoadoutsFromDB,
    newLoadoutPost,
    getLoadoutItems,
    createNewLoadout,
    deleteLoadoutFromDB,
    updateLoadoutFromDB
}
