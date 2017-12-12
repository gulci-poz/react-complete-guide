import React from "react";
import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <h2>v. {React.version}</h2>
      <p className={assignedClasses.join(' ')}>Our people</p>
      <button
        className={btnClass}
        onClick={props.toggled}>Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
