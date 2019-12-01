

export default (state = { user: {}, errors: []}, { type, payload }) => {
    switch (type) {
        case 'SET_USER':  
          return {...state, user: payload, errors:[]};
        case 'USER_ERRORS':
          console.log(payload)
          return {...state, errors: payload}
        case 'CLEAR_USER':
          return {...state, user: {}};
        default:
          return state;
      }
}
