const getItemsAction = items => ({
    type: "GET_ITEMS",
    payload: items
})
const fetchItemsFromDB = () => dispatch => {
    fetch('https://league-of-loadouts.herokuapp.com/items')
    .then(res => res.json())
    .then(itemsArr =>{
        dispatch(getItemsAction(itemsArr))
    })
}
export default {
    fetchItemsFromDB
}