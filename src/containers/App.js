import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'qwer', name: 'gulci', age: 33},
      {id: 'asdf', name: 'karolcia', age: 33},
      {id: 'zxcv', name: 'wiki', age: 4}
    ],
    showPersons: true
  };

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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggled={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
