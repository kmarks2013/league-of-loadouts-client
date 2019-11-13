const getItemsAction = items => ({
    type: "GET_ITEMS",
    payload: items
})
const fetchItemsFromDB = () => dispatch => {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(itemsArr =>{
        dispatch(getItemsAction(itemsArr))
    })
}
export default {
    fetchItemsFromDB
}