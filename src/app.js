import React, { Component } from 'react';
import Router from './index'
import './app.css';
import { connect } from 'react-redux';

class App extends Component {
componentDidMount() {
  fetch('http://0.tcp.ngrok.io:17762/wassups.json')
  .then(res => res.json())
  .then(wassups => {
    this.props.dispatch({
      type: 'FETCH_WASSUPS',
      wassups
    })
  });
};

render() {
  return <Router {...this.props} />
  }
}

let mapStateToProps = function(state) {
  return {
    wassups: state.wassups,
    newWassupValue: '',
    newUserValue: '',
  }
}

let ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp;
