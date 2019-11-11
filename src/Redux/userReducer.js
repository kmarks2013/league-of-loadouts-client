const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_USER':
          // console.log('redcucer: ', payload);
          return payload;
        case 'UPDATE_USER':
          return payload;
        case 'DELETE_USER':
          return {}
        case 'CLEAR_USER':
          return {};
        default:
          return state;
      }
}
