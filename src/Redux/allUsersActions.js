const allUsersAction = users => ({
    type: "ALL_USERS",
    payload: users
})

const fetchAllUsers = () => dispatch => {
    fetch('https://league-of-loadouts.herokuapp.com/users')
    .then(res => res.json())
    .then( usersarr => {
        // console.log(usersarr)
       dispatch(allUsersAction(usersarr))
    })
}

export default {
    fetchAllUsers
}