import React, { Component } from 'react';
import './app.css';

let WassupForm = (props) =>
  <form 
    className='wassup-form'
    onSubmit={(event) => {
      event.preventDefault();
      props.dispatch({ 
        type: 'ADD_WASSUP'
      })
    } }
    >
    <textarea 
      className='wassup-input'  
      placeholder='Wassup?'
      type="text"
      value={props.newWassupValue}
      onChange={(event) => {
        props.dispatch({ 
          type: 'HANDLE_WASSUP_INPUT',
          newWassupValue: event.target.value
      })
      }
    } 
    />
    <input 
      className='username-input'
      placeholder='Username'
      type="text"
      value={props.newUserValue} 
      onChange={(event) => {
      props.dispatch({ 
        type: 'HANDLE_USER_INPUT',
        newUserValue: event.target.value
      })
    } } 
    />, 
    <button className='submit-button' type='submit'>Post</button>
  </form>

export default WassupForm;