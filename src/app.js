const appRoot = document.querySelector('#app-root');

const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: [],
};
 
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value.trim();
  if(option) {
    app.options.push(option);
  e.target.elements.option.value = '';
  render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);
};

const render = () => {
  const template = (
  <div>
    {(app && app.title) && <h1>{app.title}</h1>}
    {(app.subTitle) && <p>{app.subTitle}</p>}
    {(app.options && app.options.length > 0) ? <p>Here are your options</p> : <p>No options</p>}
    <button disabled={!app.options.length} onClick={makeDecision}>What should I do?</button>
    <button onClick={onRemoveAll}>Remove all</button>
    <ol>
      {app.options.map( (option, i) => <li key={i}>{option}</li>)}
    </ol>
    <form onSubmit={onFormSubmit}>
      <input text='text' name='option' />
      <button>Add options</button>
    </form>
  </div>
);

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
};

class Header extends React.Component {
  render () {
    return (
      <div>
        {(app && app.title) && <h1>{app.title}</h1>}
        {(app.subTitle) && <p>{app.subTitle}</p>}
      </div>
    );
  }
};

class Action extends React.Component {
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
};
class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component Here
        <Option />
      </div>
    );
  }
};
class Option extends React.Component {
  render() {
    return (
      <div>
        Option Component Here
      </div>
    );
  }
};

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption Component Here
      </div>
    );
  }
};


ReactDOM.render(<IndecisionApp />, appRoot);

};

render();