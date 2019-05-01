const appRoot = document.querySelector('#app-root');


let visibility = false;
const onToggle = () => {
  visibility = !visibility;
  render();
};



const render = () => {
  const template = (
  <div>
    <h1>Visibility toggle</h1>
    <button onClick={onToggle}>{!visibility ? 'Show details': 'Hide details'}</button>
       {visibility && <p>Here are your options</p>}
  </div>
);

ReactDOM.render(template, appRoot);

};

render();