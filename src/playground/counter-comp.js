const templateTwo = (
  <div>
    <h1>Fattylee</h1>
    <p>Age: 31</p>
    <p>Location: 83, Ishola Daniel Str</p>
  </div>
);

const user = {
  name: 'Abu Adnaan',
  age: 31,
  location: 'Lagos',
};

const templateThree = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {JSON.stringify(user, null, 2)}</p>
    <p>Location: {user.location}</p>
    {true}
  </div>
);

let counter = 0;
const addOne = () => {
  counter++;
  renderCounterApp();
  console.log('addOne');
};
const minusOne = () => {
  counter--;
  renderCounterApp();
  console.log('minusOne');
};
const reset = () => {
  counter = 0;
  renderCounterApp();
  console.log('reset');
};


const renderCounterApp = () => {
  const templateFour = (
  <div>
    <h1>Count: {counter}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

ReactDOM.render(templateFour, document.querySelector('#app-root'));

};

//renderCounterApp();

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      counter: 0,
    };
  }
  handleAddOne() {
    console.log('handleAddOne')
    this.setState( prevState => {
      return {
        counter: prevState.counter + 1,
      }
    });
  }
  handleMinusOne() {
    console.log('handleMinusOne');
    this.setState((prevState) => {
      return {
       counter: prevState.counter - 1,
      } 
    });
  }
  handleReset() {
    console.log('handleReset');
    this.setState((prevState) => {
      return  {
        counter: 0,
      }
    });
    
  }
  render() {
    return (
  <div>
    <h1>Count: {this.state.counter}</h1>
    <button onClick={this.handleAddOne}>+1</button>
    <button onClick={this.handleMinusOne}>-1</button>
    <button onClick={this.handleReset}>reset</button>
  </div>
);
  }
};

ReactDOM.render(<Count />, document.querySelector('#app-root'));
