const appRoot = document.querySelector('#app-root');  

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      error: undefined,
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.makeDecision = this.makeDecision.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const text = e.target.elements.option.value.trim();
    //const error = this.props.handleSubmit(text);
    
    if(!text) {
      this.setState(prevState => ({ error: 'can\'t add an empty option' }));
      e.target.elements.option.value = '';
      return;
    }
    else if(this.state.options.find(option => option.toLowerCase() === text.toLowerCase() )) {
      this.setState(prevState => ({ error: `option '${text}' already exist` }));
      e.target.elements.option.value = '';
      return;
    }
    
    this.setState(prevState => ({
      options: [...prevState.options, text],
      error: undefined,
    }));
   
    e.target.elements.option.value = '';
  }
  
  handleRemoveAll(e) {
    this.setState(prevState => ({ options: [], error: undefined }));
  }
  makeDecision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    if(this.state.options.length) {
      alert(this.state.options[randomNum]);
    }
  }
  render() {
    const title = 'Indecision App';
    const subTitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <Header 
          title = {title} 
          subTitle = {subTitle}
        />
        <Action 
        optionLength = 
        {this.state.options.length}
         makeDecision = {this.makeDecision} 
        />
        <Options 
          options = {this.state.options} 
          handleRemoveAll = {this.handleRemoveAll} 
        />
        <AddOption 
          handleSubmit = {this.handleSubmit}
          error = {this.state.error}
        />
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
  render () {
    return (
      <div>
        <button disabled={this.props.optionLength === 0} onClick={this.props.makeDecision}>What should I do?</button>
      </div>
    );
  }
};
class Options extends React.Component {
  render() {
    return (
      <div>
        <button disabled={this.props.options.length === 0} onClick={this.props.handleRemoveAll}>Remove all</button>
        <ol>{this.props.options.map(option => <Option key={option} optionText={option} />)}</ol>
      </div>
    );
  }
};
class Option extends React.Component {
  render() {
    return (
      <li>
        {this.props.optionText}
      </li>
    );
  }
};

class AddOption extends React.Component {
   render() {
    return (
      <div>
        {this.props.error && <p>{this.props.error}</p>}
        <form onSubmit={this.props.handleSubmit}>
        <input text='text' name='option' />
        <button>Add options</button>
    </form>
      </div>
    );
  }
};


ReactDOM.render(<IndecisionApp />, appRoot);