import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.querySelector('#app-root'));


class Old {
  constructor(man) {
    this.man = man;
  }
  age = 31;
  getInfo() {
    console.log(`this is a ${this.man}. Age: ${this.age}   
    Nice girl`);
  }
}

const man = new Old('Lazy-man defaultProps 007');
man.getInfo();


