import React, { Component } from 'react';
import './app.css';
import WassupForm from './wassup-form';
import { connect } from 'react-redux';

class WassupFormWrapper extends React.Component {
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

let SmartForm = connect(state => state)(WassupFormWrapper);

export default SmartForm;