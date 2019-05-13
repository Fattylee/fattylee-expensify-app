import React ,{ Component, createContext, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './style.less';


const Context = createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      };
    default: 
      return state;
  }
}
class Provider extends Component {
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
    dispatch: (action) => {
      this.setState(prevState => reducer(prevState, action))
    },
  }
  render () {
    return (
      <Context.Provider value={this.state}>
        { this.props.children }
      </Context.Provider>
    );
  }
} // End Provider: this is where we keep all states.

class Root extends Component {
  
  render() {
  
    return (
    <Provider>
      
             <div>
              <h1>This is an Entry Point</h1>
              <button onClick={resetAll.bind(Provider)}>Click Me For Good</button>
              
              <Persons />
             </div>
     
    </Provider>
    );
  }
}
const resetAll = () => {
  console.log(this);
}

const Persons = () => {
  return (
    <Context.Consumer>
      {
        state => {
          return (
            <Fragment>
            
      {state.users.map(user => (
      <Person user={user} dispatch={state.dispatch} key={user.id} />
    ))}
    </Fragment>
          )
        }
      }
    </Context.Consumer>
 );
};

const Person = ({ user: {name, age, id}, dispatch }) => {
  
  return (
    <div className={'person'}>
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
      </div>
      <button onClick={handleClick.bind(null, id, dispatch)}>X</button>
    </div>
  );
};

const handleClick = (id, patch ) => {
  const action = {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
  patch(action);
};
  
// see what this.props.children does
class Abu extends Component {
  render() {
    return (<Fragment>
    {this.props.children ||
    <p>Nothing special</p>}
    </Fragment>)
  }
}
class Print extends Component {
  render() {
    return (
    <div>
    <h1>Some header</h1>
    <Abu>
    
     {/* <div> I love coding <button>Random Click</button>
      </div> */}
      
    </Abu>
    </div>
    );
  }
}


ReactDOM.render(<Root />, document.querySelector('#app-root'));