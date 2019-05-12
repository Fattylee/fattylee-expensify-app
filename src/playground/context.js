import React ,{ Component, createContext, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './style.less';


const Context = createContext();

class Provider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Abu Adnaan',
        age: 31,
      },
      {
        id: 1,
        name: 'Ummu Abdillah',
        age: 25,
      },
      {
        id: 3,
        name: 'Smith Gold',
        age: 73,
      }
    ],
  }
  render () {
    return (
      <Context.Provider value={this.state}>
        { this.props.children }
      </Context.Provider>
    );
  }
}

class Root extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Abu Adnaan',
        age: 31,
      },
      {
        id: 2,
        name: 'Ummu Abdillah',
        age: 25,
      },
      {
        id: 3,
        name: 'Smith Gold',
        age: 73,
      }
    ],
  };
  
  handleClick = (id, e) => {
    const newUsers = this.state.users.filter(user => user.id !== id);
    console.log(id, newUsers, 'event:', e);
    this.setState(() => ({
      users: newUsers,
    }))
  } 
  render() {
    return (
      <div>
        <h1>This is an Entry Point</h1>
        <button>Click Me For Good</button>
        
        <Persons users={this.state}  handleClick={this.handleClick} />
      </div>
    );
  }
}

const Persons = ({ users: {users}, handleClick }) => {
  return (
    <Fragment>
      {users.map(user => (
      <Person user={user} handleClick={handleClick} key={user.id} />
    ))}
    </Fragment>
 );
};

const Person = ({ user: {name, age, id}, handleClick }) => {
  return (
    <div className={'person'}>
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
      </div>
      <button onClick={handleClick.bind(Root, id)}>X</button>
    </div>
  );
};


ReactDOM.render(<Root />, document.querySelector('#app-root'));

