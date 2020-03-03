const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
})

const setErrorAction = errors => ({
    type: "USER_ERRORS",
    payload: errors
})

const clearUserAction = () => ({
    type: "CLEAR_USER"
})

// const allUsersAction = users => ({
//     type: "ALL_USERS",
//     payload: users
// })

const persistUserFromAPI = () => dispatch => {
    fetch('https://league-of-loadouts.herokuapp.com/persist', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.token
      }
    })
      .then(r => r.json())
      .then(user => {
          fetch(`https://league-of-loadouts.herokuapp.com/users/${user.id}`)
          .then(res => res.json())
          .then(userObj => {
              dispatch(setUserAction(userObj))
          })
      });
  };

const loginUserToDB = userData => dispatch => {
  return  fetch('https://league-of-loadouts.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data =>{
        if (data.errors){
            dispatch(setErrorAction(data.errors))
        } else {
            fetch(`https://league-of-loadouts.herokuapp.com/users/${data.user.id}`)
            .then(res => res.json())
            .then(userObj => {
                localStorage.token = data.token
                localStorage.id = data.user.id
                dispatch(setUserAction(userObj))
            })
        }
    })
}

const  logoutUser = () => dispatch => {
    dispatch(clearUserAction())
    localStorage.clear()
}

const createNewUserToDB = userData => dispatch => {
   return fetch('https://league-of-loadouts.herokuapp.com/users', {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.errors){
            dispatch(setErrorAction(data.errors))
        } else {
            localStorage.token = data.token
            localStorage.id = data.user.id
            dispatch(setUserAction(data.user))
        }
    })
}

const updateUserInDB = (payload) => dispatch => {
        dispatch(setUserAction(payload))
}


const deleteUserFromDB = (userId) => dispatch => {
    fetch(`https://league-of-loadouts.herokuapp.com/users/${userId}`,{
        method: 'DELETE' 
    }).then(res => res.json())
    .then( () => dispatch(clearUserAction())) 
    localStorage.clear() 

}

// const fetchAllUsers = () => dispatch => {
//     fetch('http://localhost:3000/users')
//     .then(res => res.json())
//     .then( usersarr => {
//        dispatch(allUsersAction(usersarr))
//     })
// }
 
export default {
    persistUserFromAPI,
    loginUserToDB,
    logoutUser,
    createNewUserToDB,
    updateUserInDB,
    deleteUserFromDB
}