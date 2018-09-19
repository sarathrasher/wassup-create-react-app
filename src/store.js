import { createStore } from 'redux';
import reducer from './reducer'

// const wassups = [
//   { date: new Date(),
//     content: "Blargh Blargh Blargh",
//     user: 'Ptera🦆tal',
//     id: 1,
//   },
//   { date: new Date(),
//     content: "It's hard to know how to React to this",
//     user: 'Tyranasaurus 🐤',
//     id: 2,
//   },
//   { date: new Date(),
//     content: "Re🦆🦆",
//     user: 'Veloci🐥tor',
//     id: 3,
//   },
// ]

let initialState = {
  wassups: [],
  newWassupValue: '',
  newUserValue: '',
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
