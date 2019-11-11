const url= 'http://localhost:3000/loadouts'


const getLoadoutsAction = loadouts => ({
    type: "GET_LOADOUTS",
    payload: loadouts
})

const createNewLoadout = loadout => ({
    type: "CREATE_LOADOUT",
    payload: loadout
})

// const LoadoutItemsAction = loadout => ({
//     type: "LOADOUT_ITEMS",
//     payload: loadout
// })


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
const getLoadoutItems = (loadoutId, itemId) => dispatch => {
    fetch(`http://localhost:3000/loadout_items/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            item_id: itemId,
            loadout_id: loadoutId
            
        })
    }).then(res => res.json())
}
 


export default {
    fetchLoadoutsFromDB,
    newLoadoutPost,
    getLoadoutItems,
    deleteLoadoutFromDB,
    updateLoadoutFromDB
}
