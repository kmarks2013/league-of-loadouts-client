const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GET_LOADOUTS":
        return payload
    case "CREATE_LOADOUT":
        return [...state, payload]
    case "DELETE_LOADOUT":
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