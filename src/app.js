import React, { Component } from 'react';
import Router from './index'
import './app.css';

let generateId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    wassups: [],
  }
}
componentDidMount() {
  fetch('http://0.tcp.ngrok.io:11140/wassups.json')
  .then(res => res.json())
  .then(wassups => {
    this.setState({
      wassups: wassups
  });
});
};

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
  return <Router {...this.state} addWassup={addWassup} />
  }
}

export default App;
