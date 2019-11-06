const initialState = [
    
]

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GET_LOADOUTS":
        // console.log(payload, "i am not fetching right now?")
        return payload
    case "CREATE_LOADOUT":
        return [payload, ...state]
    case "DELETE_LOADOUT":
        // console.log(state)
        return handleDeleteLoadout(state, payload)
    case "UPDATE_LOADOUT":
        return handleUpdateLoadout(state, payload)
    default:
        return state
    }
}


// hanndlers

const handleDeleteLoadout = (loadouts, loadoutId) =>
    loadouts.filter(loadout => loadout.id !== loadoutId)


const handleUpdateLoadout = (loadouts, updatedLoadout) =>
    loadouts.map(loadout => (loadout.id === updatedLoadout.id ? updatedLoadout:loadout ))