import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginTop: '10px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // event is a default argument; with one line in function we perform return
            // function is executed when event occurs
            // may be inefficient comparing to bind - too many DOM refreshes
            // {() => this.switchNameHandler('sebek')}
            return (
              <Person
                name={person.name}
                age={person.age}
                index={index}
                key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                // changed={this.nameChangedHandlerCustom}>Permissions: user
                changed={(event) => this.nameChangedHandler(event, person.id)}>Permissions: user
              </Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>hello from react</h1>
        <h2>v. {React.version}</h2>
        <button
          style={style}
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
