import React, { Component } from 'react';
import './app.css';
import WassupForm from './wassup-form';

class WassupFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWassupValue: '',
      newUserValue: '',
    }
  }
  render() {
    let updateWassupInput = (newWassupValue, newUserValue) => {
      this.setState({
        newWassupValue,
        newUserValue, 
      })
    }
    return <WassupForm {...this.props} {...this.state} updateWassupInput={updateWassupInput} />
  }
}

export default WassupFormWrapper;