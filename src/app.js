import React, { Component } from 'react';
import Router from './index'
import './app.css';
import { connect } from 'react-redux';

let generateId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

class App extends Component {
// componentDidMount() {
//   fetch('http://0.tcp.ngrok.io:11140/wassups.json')
//   .then(res => res.json())
//   .then(wassups => {
//     this.setState({
//       wassups: wassups
//   });
// });
// };

render() {
  let addWassup = (newWassupContent, newWassupUser) => {
    this.setState({
      wassups: [
        {
          id: generateId(),
          user: newWassupUser,
          content: newWassupContent,
        }
      ].concat(this.state.wassups)
    })
  }
  return <Router {...this.props} addWassup={addWassup} />
  }
}

let SmartApp = connect(state => state)(App);

export default SmartApp;
