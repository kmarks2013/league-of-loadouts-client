export default (state = { user: {}, errors: [], allUsers:[]}, { type, payload }) => {
    switch (type) {
        case 'SET_USER':  
          return {...state, user: payload, errors:[]};
        case 'USER_ERRORS':
          console.log(payload)
          return {...state, errors: payload}
        case 'CLEAR_USER':
          return {...state, user: {}};
        case 'ALL_USERS':
          // console.log(payload)
          return {...state, allUsers:payload}
        default:
          return state;
      }
}
