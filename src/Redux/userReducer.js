

export default (state = { user: {}, errors: []}, { type, payload }) => {
    switch (type) {
        case 'SET_USER':  
          console.log(payload);
          return {...state, user: payload};
        case 'USER_ERRORS':
          console.log(payload)
          return {...state, errors: payload}
        case 'CLEAR_USER':
          return {};
        default:
          return state;
      }
}
