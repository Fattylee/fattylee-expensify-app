import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options.jsx';
import AddOption from './AddOption';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      error: undefined,
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.makeDecision = this.makeDecision.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    
    //console.log(mama);
    const text = e.target.elements.option.value.trim();
    
    if(!text) {
      this.setState(prevState => ({ error: 'can\'t add an empty option' }));
      e.target.elements.option.value = '';
      return;
    }
    else if(this.state.options.find(option => option.toLowerCase() === text.toLowerCase() )) {
      return this.setState(prevState => ({ error: `option '${text}' already exist` }));
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
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove),
    }))
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if(options && options.length > 0) {
      this.setState(prevState => ({ options }))
    }
    }
    catch(e) {}
  }
  componentWillUnmount(prevProps, prevState) {
    console.log('componentWillUnmount');
  }
  componentDidUpdate(prevProps, prevState) {
    const jsonOptions = JSON.stringify(this.state.options);
    if(prevState.options.length !== this.state.options.length) {
      window.localStorage.setItem('options', jsonOptions);
    }
  }
  render() {
    const subTitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <Header
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
          handleDeleteOption = {this.handleDeleteOption} 
        />
        <AddOption 
          handleSubmit = {this.handleSubmit}
          error = {this.state.error}
          options = {this.state.options}
        />
      </div>
    );
  }
};

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
