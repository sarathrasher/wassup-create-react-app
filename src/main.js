import React, { Component } from 'react';
import WassupFormWrapper from './wassup-form-wrapper';
import './app.css';
import WassupList from './wassup-list';

let Main = (props) => 
  <div className='main'>
  <h1 className='header'>Wassup!</h1>,
  <WassupFormWrapper addWassup={props.addWassup} />,
  <WassupList wassups={props.wassups} />,
  </div>

export default Main;
