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

ReactDOM.render(templateFour, appRoot);

};

renderCounterApp();