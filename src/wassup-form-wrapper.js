import React, { Component } from 'react';
import './app.css';
import WassupForm from './wassup-form';
import { connect } from 'react-redux';

class WassupFormWrapper extends React.Component {
  render() {
    return <WassupForm {...this.props} {...this.state} />
  }
}

let SmartForm = connect(state => state)(WassupFormWrapper);

export default SmartForm;