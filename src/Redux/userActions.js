
const getAllUsers = users => ({
    type: 'ALL_USERS',
    payload: users
})

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

const fetchUsersFromDB = () => dispatch => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(usersArr =>{
        dispatch(getAllUsers(usersArr))
    })
}


const persistUserFromAPI = () => dispatch => {
    fetch('http://localhost:3000/persist', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.token
      }
    })
      .then(r => r.json())
      .then(user => {
          fetch(`http://localhost:3000/users/${user.id}`)
          .then(res => res.json())
          .then(userObj => {
              dispatch(setUserAction(userObj))
          })
      });
  };

const loginUserToDB = userData => dispatch => {
  return  fetch('http://localhost:3000/login', {
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
            fetch(`http://localhost:3000/users/${data.user.id}`)
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
   return fetch('http://localhost:3000/users', {
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
    fetch(`http://localhost:3000/users/${userId}`,{
        method: 'DELETE' 
    }).then(res => res.json())
    .then( () => dispatch(clearUserAction())) 
    localStorage.clear() 

}
 
export default {
    persistUserFromAPI,
    loginUserToDB,
    logoutUser,
    createNewUserToDB,
    updateUserInDB,
    deleteUserFromDB,
    fetchUsersFromDB
}