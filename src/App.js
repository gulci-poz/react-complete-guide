import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 'qwer', name: 'gulci', age: 33},
      {id: 'asdf', name: 'karolcia', age: 33},
      {id: 'zxcv', name: 'wiki', age: 4}
    ],
    showPersons: true
  };

  // using flexible id in the input element

  // nameChangedHandlerCustom = (event) => {
  //   // we change state in immutable fashion
  //   // const persons_mod = this.state.persons.slice();
  //   // es6
  //   const persons_mod = [...this.state.persons];
  //   const person_index = event.target.id.split('-')[1];
  //   persons_mod[person_index].name = event.target.value;
  //
  //   this.setState({
  //     persons: persons_mod
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // classic es way
    // const person = Object.assign({}, this.state.persons[personIndex]);

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (index) => {
    const persons_mod = [...this.state.persons];
    // deleting one item
    persons_mod.splice(index, 1);
    this.setState({
      persons: persons_mod
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // event is a default argument; with one line in function we perform return
            // function is executed when event occurs
            // may be inefficient comparing to bind - too many DOM refreshes
            // {() => this.switchNameHandler('sebek')}
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  index={index}
                  click={this.deletePersonHandler.bind(this, index)}
                  // changed={this.nameChangedHandlerCustom}>Permissions: user
                  changed={(event) => this.nameChangedHandler(event, person.id)}>Permissions: user
                </Person>
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>hello from react</h1>
        <h2>v. {React.version}</h2>
        <p className={assignedClasses.join(' ')}>Our people</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>

        {/*condition using ternary expression*/}
        {/*{condition ? jsx_code : null}*/}

        {persons}
      </div>
    );

    // equivalent code
    // jsx code will be compiled to such code
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello from react ' + React.version));
  }
}

export default App;
