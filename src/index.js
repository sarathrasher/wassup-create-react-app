import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import WassupPage from './wassup-page';
import Main from './main'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reminder of steps:

// 1. Make a Redux store, start it off with a list of wassups
// 2. Find one class component that was storing wassups in state
// 3. Move that state into a Redux store
// 4. Connect that component to the wassups in the Redux store

let generateId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

const wassups = [
  { date: new Date(),
    content: "Blargh Blargh Blargh",
    user: 'Ptera🦆tal',
    id: 1,
  },
  { date: new Date(),
    content: "It's hard to know how to React to this",
    user: 'Tyranasaurus 🐤',
    id: 2,
  },
  { date: new Date(),
    content: "Re🦆🦆",
    user: 'Veloci🐥tor',
    id: 3,
  },
]

let initialState = {
  wassups: wassups,
  newWassupValue: '',
  newUserValue: '',
};

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

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

let app = 
  <Provider store={store}>
    <App />
  </Provider>

const NavBar = () =>
  <div>
    <NavLink to="/wassups">Home</NavLink>
    <NavLink to="/About">About</NavLink>
    <NavLink to="/Profile">Profile</NavLink>
  </div>

let About = () =>
  <div>
    <h1>About</h1>
  </div>

let Profile = () =>
  <div>
    <h1>Profile</h1>
  </div>

let Page404 = () =>
  <div>
    <h1>404 Not Found</h1>
  </div>

let Router = (props) => 
  <HashRouter>
    <div>
      <NavBar />
      <Switch>
      <Route exact path='/wassups' render={(otherProps) => <Main {...props} {...otherProps}/>} />
      <Route path="/wassups/:id" render={(otherProps) =>    <WassupPage {...props} {...otherProps}/>} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/" component={Page404} />
      </Switch>
    </div>
  </HashRouter>

export default Router;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();


