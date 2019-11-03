
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
        dispatch(setUserAction(data.user))
        localStorage.token = data.token
    })
}

const  logoutUser = () => dispatch => {
    dispatch(clearUserAction)
    localStorage.clear()
}

const createNewUserToDB = userData => dispatch => {
    fetch ('http://localhost:3000/users', {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        .then(res => res.json())
        .then(data =>{
            dispatch(setUserAction(data.user))
            localStorage.token = data.token
        })
    })
}


export default {
    // persistUserFromAPI,
    loginUserToDB,
    logoutUser,
    createNewUserToDB
    
}