import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'gulci', age: 33},
      {name: 'karolcia', age: 33},
      {name: 'wiki', age: 4}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // merging states
    this.setState({
      persons: [
        {name: newName, age: 33},
        {name: 'karolcia', age: 33},
        {name: 'wiki', age: 4}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'gulci', age: 33},
        {name: 'karolcia', age: 33},
        {name: event.target.value, age: 4}
      ]
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
          <Person
            // reference to the function
            click={this.switchNameHandler.bind(this, 'sebko')}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>Hobbies: coding</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}/>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>hello from react</h1>
        <h2>v. {React.version}</h2>
        {/*event is an argument; with one line we return*/}
        {/*function is executed when event occurs*/}
        {/*may be inefficient comparing to bind - too many DOM refreshes*/}
        <button
          style={style}
          onClick={() => this.switchNameHandler('sebek')}>Switch name
        </button>
        <br/>
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
