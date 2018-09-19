

let reducer = (oldState, action) => {
  if (action.type === 'ADD_WASSUP') {
    return {
      ...oldState,
      id: generateId(),
      user: oldState.newWassupUser,
      content: oldState.newWassupContent,
    } 
  } else {
    return oldState;
  }
}

export default reducer;
