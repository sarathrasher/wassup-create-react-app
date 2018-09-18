import React from 'react';
import { Link } from 'react-router-dom';

let WassupPage = (props) => {
  let id = props.match.params.id;
  return props.wassups.filter((wassup) => wassup.id.toString() === id).map(wassup => {
  return (
    <div className="wassup-page">
    <h4 className='wassup-content'>{wassup.content}</h4>
    <p className='wassup-user'>Posted by: {wassup.user}</p>
    <Link to="/wassups">Go To Home</Link>
  </div>
  ) }
  )
}

export default WassupPage
