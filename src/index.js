import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import WassupPage from './wassup-page';
import Main from './main'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';

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
      <Route path="/wassups/:id" render={(otherProps) => <WassupPage {...props} {...otherProps}/>} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/" component={Page404} />
      </Switch>
    </div>
  </HashRouter>

export default Router;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


