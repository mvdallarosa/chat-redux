const messageReducer = (state = null, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}

export default messageReducer
