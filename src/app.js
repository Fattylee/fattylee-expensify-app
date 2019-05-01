const appRoot = document.querySelector('#app-root');

const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: [],
}
  

 
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
    const title = 'Indecision App';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['one thing', 'two thing', 'four thing'];
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
};

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>
      </div>
    );
  }
};

class Action extends React.Component {
  makeDecision() {
    alert('wetin make i do?')
  }
  render () {
    return (
      <div>
        <button onClick={this.makeDecision}>What should I do?</button>
      </div>
    );
  }
};
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props);
    
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map(option => <Option key={option} optionText={option} />)}
      </div>
    );
  }
};
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
};

class AddOption extends React.Component {
    handleAddOption(e) {
    e.preventDefault();
    const text = e.target.elements.option.value.trim();
    if(text) {
      alert(text);
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
        <input text='text' name='option' />
        <button>Add options</button>
    </form>
      </div>
    );
  }
};


ReactDOM.render(<IndecisionApp />, appRoot);

};

render();