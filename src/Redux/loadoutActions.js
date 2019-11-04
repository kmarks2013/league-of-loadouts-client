const getLoadoutsAction = loadouts => ({
    type: "GET_LOADOUTS",
    payload: loadouts
})

const createLoadoutAction = loadout => ({
    type: "CREATE_LOADOUTS",
    payload: loadout
})

const deleteLoadoutAction = loadoutId => ({
    type: "DELETE_LOADOUTS",
    payload: loadoutId
})

const updateLoadoutsAction = loadout => ({
    type: "UPDATE_LOADOUTS",
    payload: loadout
})

