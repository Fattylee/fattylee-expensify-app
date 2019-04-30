const appRoot = document.querySelector('#app-root');
const template = <div><h1>I love reacting, yes we do$$!</h1><p>some info</p></div>;

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
  </div>
);

ReactDOM.render(templateThree, appRoot);