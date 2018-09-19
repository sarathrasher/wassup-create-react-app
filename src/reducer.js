
let generateId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

let fetchWassups = (oldState, action) => {
  return {
    ...oldState,
    wassups: action.wassups
  }
}

let deleteWassup = (oldState, action) => {
  let newWassups = oldState.wassups
    .filter(wassup =>
      wassup.id !== action.id
    )
  return {...oldState, wassups: newWassups}
}

let updateWassupInput = (oldState, action) => {
  return {
    ...oldState, 
    newWassupValue: action.newWassupValue,
  }
}

let updateUserInput = (oldState, action) => {
  return {
    ...oldState, 
    newUserValue: action.newUserValue,
  }
}

let addNewWassup = (oldState, action) => {
  let newWassups = [
    {
      id: generateId(),
      user: oldState.newWassupValue,
      content: oldState.newUserValue,
    }
  ].concat(oldState.wassups)
  return {...oldState, wassups: newWassups, newWassupValue: '', newUserValue: ''}
}

let reducers = {
  'FETCH_WASSUPS': fetchWassups,
  'ADD_WASSUP': addNewWassup,
  'DELETE_WASSUP': deleteWassup,
  'HANDLE_WASSUP_INPUT': updateWassupInput,
  'HANDLE_USER_INPUT': updateUserInput
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}


// let reducer = (oldState, action) => {
//   if (action.type === 'ADD_WASSUP') {
//     return {
//       ...oldState,
//       id: generateId(),
//       user: oldState.newWassupUser,
//       content: oldState.newWassupContent,
//     } 
//   } else if (action.type === 'DELETE_WASSUP') {
//     deleteWassup(oldState, action)
//   } else {
//     return oldState;
//   }
// }

export default reducer;
