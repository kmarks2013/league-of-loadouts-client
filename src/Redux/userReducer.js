

export default (state = { user: {}, errors: [], users: []}, { type, payload }) => {
    switch (type) {
        case 'ALL_USERS':
          return{...state, users:payload}
        case 'SET_USER':  
          return {...state, user: payload, errors:[]};
        case 'USER_ERRORS':
          return {...state, errors: payload}
        case 'CLEAR_USER':
          return {...state, user: {}};
        default:
          return state;
      }
}
