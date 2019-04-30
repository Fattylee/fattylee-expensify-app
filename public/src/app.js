const appRoot = document.querySelector('#app-root');
const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: ['option one', 'option two'],
}; 

const template = (
  <div>
    {(app && app.title) && <h1>{app.title}</h1>}
    {(app.subTitle) && <p>{app.subTitle}</p>}
    {(app.options && app.options.length > 0) ? <p>Here are your options</p> : <p>No options</p>}
  </div>
  );

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

ReactDOM.render(template, appRoot);