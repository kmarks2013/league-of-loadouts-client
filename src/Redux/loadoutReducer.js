const initialState = [
    
]

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GET_LOADOUTS":
        // console.log(payload, "i am not fetching right now?")
        return payload
    case "CREATE_LOADOUT":
        console.log(state, payload)
        return [payload, ...state]
    case "DELETE_LOADOUT":
        // console.log(state)
        return handleDeleteLoadout(state, payload)
    case "UPDATE_LOADOUT":
        return handleUpdateLoadout(state, payload)
    case 'LOADOUT_ITEMS':
        return handleDeleteLoadoutItems(state,payload)
    case 'CLEAR_LOADOUTS':
        return []
    default:
        return state
    }
}


// hanndlers


const handleDeleteLoadout = (loadouts, loadoutId) =>
    loadouts.filter(loadout => loadout.id !== loadoutId)

// // const handleDeleteLoadoutItem = (loadouts, loadoutId) =>
//      loadouts.filter(loadout => loadout.id !== loadoutId)

const handleDeleteLoadoutItems = (loadouts, currentLoadout, itemId) => {
    return loadouts.map(loadout => {
            if (loadout.id === currentLoadout.id) {
                return {
                    ...currentLoadout,
                    items: currentLoadout.items.fitler(item => item.id !== itemId )

                }  
            } 
            else {
                return loadout
            }
        })
}

const handleUpdateLoadout = (loadouts, updatedLoadout) =>
    loadouts.map(loadout => (loadout.id === updatedLoadout.id ? updatedLoadout:loadout ))