import WassupRow from './wassup-row';
import React, { Component } from 'react';

let WassupList = (props) =>
  <ul className='wassup-list'>{props.wassups.map(wassup => 
  <WassupRow wassup={wassup} key={wassup.id} />)}
  </ul>

export default WassupList