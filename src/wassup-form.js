import React, { Component } from 'react';
import './app.css';

let WassupForm = (props) =>
  <form 
    className='wassup-form'
    onSubmit={(event) => {
      event.preventDefault();
      props.addWassup(props.newWassupValue, props.newUserValue);

    } }
    >
    <textarea 
      className='wassup-input'  
      placeholder='Wassup?'
      type="text"
      value={props.newWassupValue}
      onChange={(event) => {
        props.updateWassupInput(event.target.value, props.newUserValue)
      }
    } 
    />
    <input 
      className='username-input'
      placeholder='Username'
      type="text"
      value={props.newUserValue} 
      onChange={(event) => {
          props.updateWassupInput(props.newWassupValue, event.target.value)
        }
      }
    />, 
    <button className='submit-button' type='submit'>Post</button>
  </form>

export default WassupForm;