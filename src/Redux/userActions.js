


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

// const persistUserFromAPI = () => dispatch => {
//     fetch('http://localhost:3000/persist' , {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'bearer' + localStorage.token
//         }
//     })
//     .then(res = res.json())
//     .then(user => {
//         dispatch(setUserAction(user))
//     })
// }

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
              console.log(userObj)
              dispatch(setUserAction(userObj))
          })
      });
  };

const loginUserToDB = userData => dispatch => {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data =>{
        if (data.errors){
            console.log(data.errors)
            dispatch(setErrorAction(data.errors))
        } else {
            fetch(`http://localhost:3000/users/${data.user.id}`)
            .then(res => res.json())
            .then(userObj => {
                console.log(userObj)
                dispatch(setUserAction(userObj))
                localStorage.token = data.token
                localStorage.id = data.user.id
            })
        }
    })
}

const  logoutUser = () => dispatch => {
    dispatch(clearUserAction())
    localStorage.clear()
}

const createNewUserToDB = userData => dispatch => {
    fetch('http://localhost:3000/users', {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data =>{
            dispatch(setUserAction(data.user))
            localStorage.token = data.token
            localStorage.id = data.user.id
    })
}

const updateUserInDB = (user, payload) => dispatch => {
    console.log(user, payload)
    fetch(`http://localhost:3000/users/${user.id}`,{
        method: 'PATCH',
        headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(updatedUser => {
        // console.log(updatedUser)
        dispatch(setUserAction(updatedUser))
    })
}


const deleteUserFromDB = (userId) => dispatch => {
    console.log('i should dispatch the delete user action and clear local storage', userId) 
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
    deleteUserFromDB
}