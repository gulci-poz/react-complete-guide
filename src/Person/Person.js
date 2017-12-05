import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/*<p>Index: {props.index}</p>*/}
      {/*<p>{props.children}</p>*/}
      {/*two way data binding*/}
      {/*thanks to using props, we have a flexible id*/}
      <input type="text" id={'person-' + props.index} onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
