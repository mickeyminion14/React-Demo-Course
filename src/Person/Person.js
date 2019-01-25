import React from 'react';
import  './Person.css'

const person = (props) => {
  return (
    <div className="Person" >
  <p onClick={props.click}>I'm a person 
  and I am {props.name}, {props.age} years old</p>
  <input type="text" onChange={props.nameChangedHandler}/>
  </div>
  )}

export default person;