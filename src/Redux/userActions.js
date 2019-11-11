
const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
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
    })
}

const  logoutUser = () => dispatch => {
    dispatch(clearUserAction())
    localStorage.clear()
}

const createNewUserToDB = userData => dispatch => {
    fetch ('http://localhost:3000/users', {
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
    })
}


export default {
    persistUserFromAPI,
    loginUserToDB,
    logoutUser,
    createNewUserToDB

}