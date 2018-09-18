import React, { Component } from 'react';
import { Link } from 'react-router-dom';


let WassupRow = (props) => 
  <li className='wassup-row'>
    <h4 className='wassup-content'>{props.wassup.content}</h4>
    <p className='wassup-user'>Posted by: {props.wassup.user}</p>
    {/* <p className='wassup-date'>Posted on: {props.wassup.date.toString()}</p> */}
    <Link to={`/wassups/${props.wassup.id}`} state={props.wassup}>View Wassup</Link>
  </li>

export default WassupRow;