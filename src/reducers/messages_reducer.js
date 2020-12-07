const messagesReducer = (state = null, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    default:
      return state;
  }
}

export default messagesReducer;
