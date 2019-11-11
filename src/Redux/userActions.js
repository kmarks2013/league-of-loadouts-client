
const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
})

const updateUserAction = userObj =>({
    type: 'UPDATE_USER',
    pauload: userObj
})

const deleteUserAction = userId => ({
    type: "DELETE_USER",
    payload: userId
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
        // console.log(data)
        fetch(`http://localhost:3000/users/${data.user.id}`)
        .then(res => res.json())
        .then(userObj => {
            console.log(userObj)
            dispatch(setUserAction(userObj))
        })
    localStorage.token = data.token
    localStorage.id = data.user.id
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


const updateUser = (user, payload) => dispatch => {
    console.log = (user)
    // fetch(`http://localhost:3000/users/${user.id}`)
}

const deleteUserFromDB = (userId) => dispatch => {
    console.log('i should dispatch the delete user action')
}
 
export default {
    persistUserFromAPI,
    loginUserToDB,
    logoutUser,
    createNewUserToDB,
    updateUser,
    deleteUserFromDB
}